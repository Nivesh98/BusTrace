import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SeatMap from './BusSeats/SeatMap';

const BusDetails = ({navigation, route}) => {
  const {busID} = route.params;
  return (
    <View style={{flex: 1}}>
      <Text>BusDetails {busID}</Text>
      <SeatMap />
    </View>
  );
};

export default BusDetails;

const styles = StyleSheet.create({});
