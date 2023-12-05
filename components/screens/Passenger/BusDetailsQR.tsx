import React from 'react';
import {StyleSheet, View} from 'react-native';
import SeatMapQR from './BusSeats/SeatMapQR';

const BusDetailsQR = ({navigation, route}) => {
  const {busID} = route.params;
  const originalString = busID;
  const modifiedString = originalString.slice(0, -2);

  const originalString2 = busID;
  const lastTwoDigits = originalString2.slice(-1);

  console.log(lastTwoDigits);

  console.log(modifiedString);
  return (
    <View style={{flex: 1}}>
      {/* <Text>BusDetailsQR {busID}</Text>
      <Text>{modifiedString.toString()}</Text>
      <Text>{lastTwoDigits}</Text> */}
      <SeatMapQR
        busID={modifiedString.toString()}
        seatNo={lastTwoDigits.toString()}
      />
    </View>
  );
};

export default BusDetailsQR;

const styles = StyleSheet.create({});
