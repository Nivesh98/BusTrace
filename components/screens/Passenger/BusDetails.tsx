import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BusDetails = ({navigation, route}) => {
  const {busID} = route.params;
  return (
    <View>
      <Text>BusDetails {busID}</Text>
    </View>
  );
};

export default BusDetails;

const styles = StyleSheet.create({});
