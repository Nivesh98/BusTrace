// import React, { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Seat from './Seat'; // Import the Seat component you created

// type SeatStatus = 'booked' | 'available' | 'selected';

// const SeatMap: React.FC = () => {
//   const [seats, setSeats] = useState<Array<SeatStatus>>(
//     new Array(37).fill('available'),
//   );

//   const handleSelectSeat = (index: number) => {
//     setSeats(seats.map((seat, i) => (i === index ? 'selected' : seat)));
//   };

//   return (
//     <View style={styles.container}>
//       {seats.map((status, index) => (
//         <Seat
//           key={index}
//           status={status}
//           onSelect={() => handleSelectSeat(index)}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     padding: 10,
//   },
// });

// export default SeatMap;
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
  const [seats, setSeats] = useState(new Array(41).fill('available'));

  const handlePress = (index: number) => {
    // Logic to handle seat selection
    setSeats(seats.map((seat, i) => (i === index ? 'selected' : seat)));
  };

  // Assuming 'seats' is an array with a length of at least 20
  const row1 = seats
    .map((seat, index) => ({seat, index})) // map to an array of objects with seat and index
    .filter(item => item.index >= 0 && item.index <= 13); // filter based on index

  const row2 = seats
    .map((seat, index) => ({seat, index})) // map to an array of objects with seat and index
    .filter(item => item.index >= 14 && item.index <= 34); // filter based on index
  console.log('row1', row1);

  const row3 = seats
    .map((seat, index) => ({seat, index})) // map to an array of objects with seat and index
    .filter(item => item.index >= 35 && item.index <= 40); // filter based on index
  console.log('row1', row1);
  return (
    // <ScrollView style={styles.scrollView}>
    //   <View style={styles.container}>
    //     {seats.map((status, index) => {
    //       // Directly before returning your seat JSX, you can include any logic you want to run
    //       const isRow1 = index >= 0 && index <= 19;
    //       const isRow2 = index >= 20 && index <= 49;
    //       return (
    //         <>
    //           {isRow1 && (
    //             <Seat
    //               number={index + 1}
    //               status={status}
    //               onPress={() => handlePress(index)}
    //             />
    //           )}
    //           {isRow2 && (
    //             <Seat
    //               number={index + 1}
    //               status={status}
    //               onPress={() => handlePress(index)}
    //             />
    //           )}
    //         </>
    //       );
    //     })}
    //   </View>
    // </ScrollView>
    //
    // <ScrollView style={styles.scrollView}>
    //   <View style={styles.container}>
    //     <FlatList
    //       data={row1}
    //       numColumns={2}
    //       renderItem={({status, index}) => {
    //         return (
    //           <>
    //             <Seat
    //               number={index + 1}
    //               status={status}
    //               onPress={() => handlePress(index)}
    //             />
    //           </>
    //         );
    //       }}
    //     />
    //     {/* {row1.map((status, index) => {
    //       // Directly before returning your seat JSX, you can include any logic you want to run

    //       return (
    //         <>
    //           <Seat
    //             number={index + 1}
    //             status={status}
    //             onPress={() => handlePress(index)}
    //           />
    //         </>
    //       );
    //     })} */}
    //   </View>
    // </ScrollView>
    //

    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View>
            <FlatList
              data={row1} // your seats array
              numColumns={2} // number of columns you want
              keyExtractor={item => item.index.toString()} // Convert index to string for key
              renderItem={({item}) => (
                <Seat
                  number={item.index + 1}
                  status={item.seat}
                  onPress={() => handlePress(item.index)}
                />
              )}
            />
          </View>
          <View>
            <FlatList
              data={row2} // your seats array
              numColumns={3} // number of columns you want
              keyExtractor={item => item.index.toString()} // Convert index to string for key
              renderItem={({item}) => (
                <Seat
                  number={item.index + 1}
                  status={item.seat}
                  onPress={() => handlePress(item.index)}
                />
              )}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <FlatList
            data={row3} // your seats array
            horizontal // number of columns you want
            keyExtractor={item => item.index.toString()} // Convert index to string for key
            renderItem={({item}) => (
              <Seat
                number={item.index + 1}
                status={item.seat}
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
    width: '57%',
    height: '75%',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 6,
    padding: 5,
  },
  //   seat: {
  //     width: '14.6%', // Adjust width accordingly
  //     aspectRatio: 1, // To make the seats square
  //     margin: '0.55%',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 4,
  //   },
  seat: {
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  seat1: {
    width: '15.6%', // Adjust width accordingly
    aspectRatio: 1, // To make the seats square
    margin: '0.5%',
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
