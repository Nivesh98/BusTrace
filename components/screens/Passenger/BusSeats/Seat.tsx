import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

type SeatStatus = 'booked' | 'available' | 'selected';

interface SeatProps {
  status: SeatStatus;
  onSelect: () => void;
}

const Seat: React.FC<SeatProps> = ({status, onSelect}) => {
  const backgroundColor =
    status === 'booked' ? 'red' : status === 'selected' ? 'yellow' : 'green';

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.seat, {backgroundColor}]}
    />
  );
};

const styles = StyleSheet.create({
  seat: {
    width: 30,
    height: 30,
    margin: 2,
  },
});

export default Seat;
