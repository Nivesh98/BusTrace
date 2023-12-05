import moment from 'moment';
import React from 'react';
import {View} from 'react-native';
import SeatMap from './BusSeats/SeatMap';
import SeatMapReservation from './BusSeats/SeatMapReservation';

const BusDetailsReservation = ({route}) => {
  const {busID, selectedDate} = route.params;
  console.log('busID', busID, 'selectedDate', selectedDate);
  const today = moment().toDate().getDay();

  return (
    <View style={{flex: 1}}>
      {today === selectedDate ? (
        <SeatMap busID={busID} />
      ) : (
        <SeatMapReservation busID={busID} selectedDate={selectedDate} />
      )}
    </View>
  );
};

export default BusDetailsReservation;
