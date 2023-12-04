import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Define your types
type SeatStatus = 'available' | 'booked' | 'selected' | 'processing';

// Define your seat component
const Seat = ({number, status, onPress}) => {
  const getStatusStyle = status => {
    switch (status) {
      case 'booked':
        return styles.bookedSeat;
      case 'selected':
        return styles.selectedSeat;
      case 'processing':
        return styles.processingSeat;
      default:
        return styles.availableSeat;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.seat, getStatusStyle(status)]}>
      <Image
        source={require('../../../assets/images/car.png')}
        style={{width: 18, height: 18}}
        resizeMode="contain"
      />
      <Text style={styles.seatText}>{number}</Text>
    </TouchableOpacity>
  );
};

// Define your seat map component
const SeatMap = () => {
  const initialSeats = new Array(41).fill({status: 'available', userId: null});
  const [seats, setSeats] = useState(initialSeats);
  const [selectedCount, setSelectedCount] = useState(0);

  const handlePress = index => {
    const newSeats = seats.map((seat, i) => {
      if (i === index) {
        if (seat.status === 'selected') {
          setSelectedCount(selectedCount - 1);
          return {...seat, status: 'available'};
        } else if (selectedCount < 6) {
          setSelectedCount(selectedCount + 1);
          return {...seat, status: 'selected', userId: 'currentUser'}; // Replace 'currentUser' with actual user ID
        }
      }
      return seat;
    });

    setSeats(newSeats);
  };

  // Function to create rows
  const createRow = (start, end) => {
    return seats.slice(start, end).map((seat, i) => ({
      ...seat,
      index: start + i,
    }));
  };

  const row1 = createRow(0, 14);
  const row2 = createRow(14, 35);
  const row3 = createRow(35, 41);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <FlatList
              data={row1}
              numColumns={2}
              keyExtractor={item => item.index.toString()}
              renderItem={({item}) => (
                <Seat
                  number={item.index + 1}
                  status={item.status}
                  onPress={() => handlePress(item.index)}
                />
              )}
            />
          </View>

          <View>
            <FlatList
              data={row2}
              numColumns={3}
              keyExtractor={item => item.index.toString()}
              renderItem={({item}) => (
                <Seat
                  number={item.index + 1}
                  status={item.status}
                  onPress={() => handlePress(item.index)}
                />
              )}
            />
          </View>
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <FlatList
            data={row3}
            horizontal
            keyExtractor={item => item.index.toString()}
            renderItem={({item}) => (
              <Seat
                number={item.index + 1}
                status={item.status}
                onPress={() => handlePress(item.index)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    width: '56%',
    height: '75%',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 6,
    padding: 5,
  },
  seat: {
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  seatText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  availableSeat: {
    backgroundColor: '#f5d7d7',
  },
  bookedSeat: {
    backgroundColor: 'red',
  },
  selectedSeat: {
    backgroundColor: 'orange',
  },
  processingSeat: {
    backgroundColor: 'yellow',
  },
});

export default SeatMap;
