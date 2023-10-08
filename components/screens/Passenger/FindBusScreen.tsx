import Geolocation from '@react-native-community/geolocation';
import {debounce} from 'lodash';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';

export const FindBusScreen = () => {
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
        console.log('currennt location', position.coords);
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

// import React, {useEffect} from 'react';
// import {StyleSheet, View} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import {useLocation} from '../../context/LocationContext';

// const FindBusScreen = () => {
//   const {currentLocation, currentDeltas, onRegionChange, locationPermission} =
//     useLocation() || {};

//   useEffect(() => {
//     if (locationPermission) {
//       // Access granted, you can use the location data here
//       console.log('Location permission granted');
//     } else {
//       // Handle the case when permission is not granted
//       console.log('Location permission denied');
//     }
//   }, [locationPermission]);

//   const markerCoordinate = {
//     latitude: currentLocation?.latitude || 0,
//     longitude: currentLocation?.longitude || 0,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={{
//           latitude: markerCoordinate.latitude,
//           longitude: markerCoordinate.longitude,
//           latitudeDelta: currentDeltas?.latitudeDelta || 0.01,
//           longitudeDelta: currentDeltas?.longitudeDelta || 0.01,
//         }}
//         onRegionChange={onRegionChange}>
//         <Marker
//           coordinate={markerCoordinate}
//           title="Current Location"
//           description="here"
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default FindBusScreen;
