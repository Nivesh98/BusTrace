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
const SeatMapQR = ({busID, seatNo}) => {
  // const initialSeats = new Array(41).fill({status: 'available', userId: null});
  // const [seats, setSeats] = useState(initialSeats);
  //const initialSeats = new Array(41).fill({status: 'available', userId: null});
  const [seats, setSeats] = useState([]);

  const [tempSeats, setTempSeats] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  useEffect(() => {
    const fetchSeats = async () => {
      const driverId = busID; // Replace with actual driver ID
      const fetchedSeats = await authService.getSeatsForDriver(driverId);
      setSeats(fetchedSeats);
    };
    console.log('busID.busID aaaaaaa', busID);
    console.log('busID mmmmmmm', busID);
    fetchSeats();
  }, []);

  useEffect(() => {
    const currentUserId = authService.getCurrentUser()?.uid;
    // Only proceed if we have a valid user ID and seats are loaded
    if (currentUserId && seats && seats.length > 0) {
      const selectedSeats = seats
        .map((seat, index) =>
          seat.userId === currentUserId && seat.status === 'selected'
            ? index + 1
            : null,
        )
        .filter(index => index !== null); // Filter out null values
      setTempSeats(selectedSeats);
      console.log('selected seats', selectedSeats);
    }
  }, [seats]); // Add seats as a dependency so it re-runs when seats changes

  //   useEffect(() => {
  //     const currentUserId = authService.getCurrentUser()?.uid;
  //     const newSeats = seats.map((seat, i) => {
  //       if (i === seatNo) {
  //         console.log('index sssssss', seatNo);
  //         console.log('seat.status sssssss', seat.status);
  //         console.log('seats ssssssssss', seats);
  //         if (
  //           seat.status === 'selected' &&
  //           seat.status !== 'booked' &&
  //           seat.userId === currentUserId
  //         ) {
  //           setSelectedCount(selectedCount - 1);
  //           setTempSeats(currentTempSeats =>
  //             currentTempSeats.filter(seatIndex => seatIndex - 1 !== seatNo),
  //           );
  //           authService.updateSeatStatus(busID, seatNo, 'available', null);
  //           return {...seat, status: 'available', userId: null};
  //         } else if (
  //           selectedCount < 6 &&
  //           seat.status !== 'booked' &&
  //           (seat.userId === currentUserId || seat.userId === null)
  //         ) {
  //           //setTempSeats(index)
  //           setTempSeats(currentTempSeats => [...currentTempSeats, seatNo + 1]);
  //           setSelectedCount(selectedCount + 1);
  //           const curAuth = authService.getCurrentUser()?.uid;
  //           authService.updateSeatStatus(
  //             busID,
  //             seatNo,
  //             'selected',
  //             curAuth || null,
  //           );
  //           return {...seat, status: 'selected', userId: curAuth}; // Replace 'currentUser' with actual user ID
  //         }
  //       }
  //       return seat;
  //     });

  //     console.log('newSeats', newSeats);
  //     console.log('tempseat', tempSeats);
  //     setSeats(newSeats);
  //   }, [seats]);
  // useEffect(() => {
  //   const currentUserId = authService.getCurrentUser()?.uid;
  //   if (seats && seats.length > 0) {
  //     seats.map((seat, i) => {
  //       if (seat.userId === currentUserId && seat.status === 'selected') {
  //         // Set status to 'booked' or any other status
  //         setTempSeats(currentTempSeats => [...currentTempSeats, i + 1]);
  //         console.log('selectedCount kkk', selectedCount);
  //       }
  //       return selectedCount;
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const fetchSeats = async () => {
      const driverId = busID; // Replace with actual driver ID
      const fetchedSeats = await authService.getSeatsForDriver(driverId);
      setSeats(fetchedSeats);

      // Update seat status based on the seatNo parameter
      if (seatNo) {
        updateSeatStatusOnLoad(fetchedSeats, seatNo);
      }
    };

    fetchSeats();
  }, [busID, seatNo]); // Add seatNo as a dependency

  const updateSeatStatusOnLoad = (fetchedSeats, seatNo) => {
    const currentUserId = authService.getCurrentUser()?.uid;
    const updatedSeats = fetchedSeats.map((seat, index) => {
      if (
        index === seatNo - 1 &&
        seat.status === 'available' &&
        currentUserId
      ) {
        return {...seat, status: 'selected', userId: currentUserId};
      }
      return seat;
    });

    setSeats(updatedSeats);
    setTempSeats([...tempSeats, seatNo]);
    if (selectedCount < 6) {
      setSelectedCount(selectedCount + 1);
    }

    authService.updateSeatStatus(busID, seatNo - 1, 'selected', currentUserId);
  };

  const handlePress = index => {
    const currentUserId = authService.getCurrentUser()?.uid;
    const newSeats = seats.map((seat, i) => {
      if (i === index) {
        console.log('index sssssss', index);
        console.log('seat.status sssssss', seat.status);
        console.log('seats ssssssssss', seats);
        if (
          seat.status === 'selected' &&
          seat.status !== 'booked' &&
          seat.userId === currentUserId
        ) {
          setSelectedCount(selectedCount - 1);
          setTempSeats(currentTempSeats =>
            currentTempSeats.filter(seatIndex => seatIndex - 1 !== index),
          );
          authService.updateSeatStatus(busID, index, 'available', null);
          return {...seat, status: 'available', userId: null};
        } else if (
          selectedCount < 6 &&
          seat.status !== 'booked' &&
          (seat.userId === currentUserId || seat.userId === null)
        ) {
          //setTempSeats(index)
          setTempSeats(currentTempSeats => [...currentTempSeats, index + 1]);
          //tempSeats.push(index);
          setSelectedCount(selectedCount + 1);
          const curAuth = authService.getCurrentUser()?.uid;
          authService.updateSeatStatus(
            busID,
            index,
            'selected',
            curAuth || null,
          );
          return {...seat, status: 'selected', userId: curAuth}; // Replace 'currentUser' with actual user ID
        }
      }
      return seat;
    });

    console.log('newSeats', newSeats);
    console.log('tempseat', tempSeats);
    setSeats(newSeats);
  };

  const proceedPayment = () => {
    const userId: string | undefined = authService.getCurrentUser()?.uid;
    if (userId !== undefined) {
      authService.updateSeatStatusProceed(busID, 'booked', userId);
    } else {
      // Handle the undefined case, e.g., by not calling the function or by setting a default value
    }
  };

  // Function to create rows

  const createRow = (start, end) => {
    console.log('seat bbbbbbbbbbbbb', seats);
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
            }}
            onPress={proceedPayment}>
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

export default SeatMapQR;
