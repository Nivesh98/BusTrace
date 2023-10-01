import Geolocation from '@react-native-community/geolocation';
import {debounce} from 'lodash';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';

export const MapDriver = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentDeltas, setCurrentDeltas] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    //getCurrentLocation();
    const interval = setInterval(() => {
      getCurrentLocation();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
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
  }, 300); // Adjust the debounce delay

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          ...currentDeltas,
        }}
        onRegionChange={onRegionChange}>
        <Marker
          coordinate={currentLocation}
          title="Current Location"
          description="here"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
