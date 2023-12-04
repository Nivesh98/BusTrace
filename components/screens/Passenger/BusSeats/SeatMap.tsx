import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FirebaseAuthService from '../../../Services/FirebaseAuthService';
import firebaseConfig from '../../../Services/firebaseConfig';
const authService = new FirebaseAuthService(firebaseConfig);
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
const SeatMap = ({busID}) => {
  // const initialSeats = new Array(41).fill({status: 'available', userId: null});
  // const [seats, setSeats] = useState(initialSeats);
  //const initialSeats = new Array(41).fill({status: 'available', userId: null});
  const [seats, setSeats] = useState([]);

  const [tempSeats, setTempSeats] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  useEffect(() => {
    const fetchSeats = async () => {
      const driverId = busID.busID; // Replace with actual driver ID
      const fetchedSeats = await authService.getSeatsForDriver(driverId);
      setSeats(fetchedSeats);
    };
    console.log('busID.busID aaaaaaa', busID.busID);
    console.log('busID mmmmmmm', busID);
    fetchSeats();
  }, []);
  const handlePress = index => {
    const newSeats = seats.map((seat, i) => {
      if (i === index) {
        if (seat.status === 'selected') {
          setSelectedCount(selectedCount - 1);
          setTempSeats(currentTempSeats =>
            currentTempSeats.filter(seatIndex => seatIndex - 1 !== index),
          );
          return {...seat, status: 'available'};
        } else if (selectedCount < 6) {
          //setTempSeats(index)
          setTempSeats(currentTempSeats => [...currentTempSeats, index + 1]);
          //tempSeats.push(index);
          setSelectedCount(selectedCount + 1);
          const curAuth = authService.getCurrentUser()?.uid;
          return {...seat, status: 'selected', userId: curAuth}; // Replace 'currentUser' with actual user ID
        }
      }
      return seat;
    });

    console.log('newSeats', newSeats);
    console.log('tempseat', tempSeats);
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <Text style={styles.seatNo}>Seat No: </Text>
          {tempSeats.map((seat, i) => (
            <Text style={styles.seatNo}>[{seat}], </Text>
          ))}
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#000'}}>
            Fare Break:
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: -5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <View
                style={{width: 10, height: 10, backgroundColor: '#f5d7d7'}}
              />
              <Text style={{fontSize: 12}}>Available Seats</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <View
                style={{width: 10, height: 10, backgroundColor: 'yellow'}}
              />
              <Text style={{fontSize: 12}}>Processing Seats</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: -5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <View
                style={{width: 10, height: 10, backgroundColor: 'orange'}}
              />
              <Text style={{fontSize: 12}}>Counter Seats</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <View style={{width: 10, height: 10, backgroundColor: 'red'}} />
              <Text style={{fontSize: 12}}>Booked Seats</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f00',
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 7.5,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFF'}}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  seatNo: {fontWeight: 'bold', fontSize: 12},
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
