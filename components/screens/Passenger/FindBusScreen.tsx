import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useLocation} from '../../context/LocationContext';

const FindBusScreen = () => {
  const {currentLocation, currentDeltas, onRegionChange, locationPermission} =
    useLocation() || {};

  useEffect(() => {
    if (locationPermission) {
      // Access granted, you can use the location data here
      console.log('Location permission granted');
    } else {
      // Handle the case when permission is not granted
      console.log('Location permission denied');
    }
  }, [locationPermission]);

  const markerCoordinate = {
    latitude: currentLocation?.latitude || 0,
    longitude: currentLocation?.longitude || 0,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: markerCoordinate.latitude,
          longitude: markerCoordinate.longitude,
          latitudeDelta: currentDeltas?.latitudeDelta || 0.01,
          longitudeDelta: currentDeltas?.longitudeDelta || 0.01,
        }}
        onRegionChange={onRegionChange}>
        <Marker
          coordinate={markerCoordinate}
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

export default FindBusScreen;
