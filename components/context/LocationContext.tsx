// LocationContext.tsx
import Geolocation from '@react-native-community/geolocation';
import {debounce} from 'lodash';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {Region} from 'react-native-maps';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions'; // Import the necessary permissions

const LocationContext = createContext<
  | {
      currentLocation: {latitude: number; longitude: number};
      currentDeltas: {latitudeDelta: number; longitudeDelta: number};
      locationPermission: boolean;
      onRegionChange: (region: Region) => void;
    }
  | undefined
>(undefined);

export const useLocation = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({children}: {children: any}) => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentDeltas, setCurrentDeltas] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [locationPermission, setLocationPermission] = useState<boolean>(false); // Initialize as false

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION); // Request location permission
        if (granted === RESULTS.GRANTED) {
          setLocationPermission(true);
          getCurrentLocation();
        } else {
          setLocationPermission(false);
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
        setLocationPermission(false);
      }
    };

    requestLocationPermission();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({
          latitude,
          longitude,
        });
      },
      error => console.log('Error getting location:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const onRegionChange = debounce((region: Region) => {
    setCurrentDeltas({
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  }, 300);

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        currentDeltas,
        onRegionChange,
        locationPermission,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
