// import React, {useEffect, useState} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import FirebaseAuthService from '../../Services/FirebaseAuthService';
// import firebaseConfig from '../../Services/firebaseConfig';
// const authService = new FirebaseAuthService(firebaseConfig);

// const PassengerSearchReservation = ({route}) => {
//   const {startLocation, endLocation, selectedDate, currentDate} = route.params;
//   const [busesToLocation, setBusesToLocation] = useState([]);

//   useEffect(() => {
//     const busesToLocationtemp = authService.getBusesToLocation(endLocation);
//     setBusesToLocation(busesToLocationtemp);
//     console.log(busesToLocation);
//   }, [busesToLocation]);

//   return (
//     <View>
//       <Text>PassengerSearchReservation</Text>
//       <Text>{startLocation}</Text>
//       <Text>{endLocation}</Text>
//       <Text>{selectedDate}</Text>
//       <Text>{currentDate}</Text>
//       <Text>{busesToLocationtemp}</Text>
//     </View>
//   );
// };

// export default PassengerSearchReservation;

import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FirebaseAuthService from '../../Services/FirebaseAuthService';
import firebaseConfig from '../../Services/firebaseConfig';

const authService = new FirebaseAuthService(firebaseConfig);

type ItemProps = {
  busID: string;
  from: string;
  to: string;
  busStatus: boolean;
  onPress: () => void;
};

const Item = ({busID, from, to, busStatus, onPress}: ItemProps) => (
  <View style={styles.item}>
    <View style={{padding: 5}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Bus ID: </Text>
        <Text style={styles.text}>{busID}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            marginRight: 10,
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          From:{' '}
        </Text>
        <Text style={styles.text}>{from}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginRight: 10,
              color: '#fff',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            To :
          </Text>
          <Text style={styles.text1}>{to}</Text>
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F00',
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 5,
            }}
            onPress={onPress}>
            <Text style={{color: '#fff'}}>RESERVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={{padding: 5, marginLeft: 60}}>
      <View style={{flexDirection: 'row', marginLeft: -110}}>
        <Text style={styles.text}>bus Status : </Text>
        <Text style={styles.text}>{busStatus}</Text>
      </View>
    </View>
  </View>
);

const PassengerSearchReservation = ({route, navigation}) => {
  const {startLocation, endLocation, selectedDate, currentDate} = route.params;
  const [busesToLocation, setBusesToLocation] = useState([]);
  const [getBusDetails, setBusDetails] = useState([]);

  const today = moment().toDate().getDay();
  console.log('today', today);

  useEffect(() => {
    const fetchBuses = async () => {
      if (selectedDate !== today) {
        const dates = await authService.getTimeTable(selectedDate.toString());
        console.log('dates ggggggggg', dates);
        setBusesToLocation(dates);
      } else {
        const buses = await authService.getBusesToLocation(endLocation);
        setBusesToLocation(buses);
        console.log(buses);
      }
    };

    fetchBuses();
  }, [endLocation]); // Dependency on endLocation

  // useEffect(() => {
  //   busesToLocation.map((bus, index) => {
  //     const busD = authService.getBusesDetails(bus.id);
  //     getBusDetails.push(busD);
  //   });
  //   console.log('getBusDetails kk', getBusDetails);
  // }, [busesToLocation]);

  useEffect(() => {
    const fetchBusDetails = async () => {
      // Use Promise.all to wait for all promises to resolve
      if (selectedDate !== today) {
        const details = await Promise.all(
          busesToLocation.map(bus => authService.getBusesDetails(bus.id)),
        );
        const d = details.flat();
        setBusDetails(d);
        console.log('details lll', details);
      } else {
        const details = await Promise.all(
          busesToLocation.map(bus => authService.getBusesDetails(bus.busID)),
        );
        const d = details.flat();
        setBusDetails(d);
        console.log('details lll', details);
      }

      // Once all promises have resolved, update the state with the new details

      console.log('getBusDetails ll a', getBusDetails);
    };

    if (busesToLocation.length > 0) {
      fetchBusDetails();
      console.log('getBusDetails ll', getBusDetails);
    }
  }, [busesToLocation]);

  //   useEffect(() => {
  //     const fetchBusDetails = async () => {
  //       if (selectedDate !== today) {
  //         const detailsPromises = busesToLocation.map(bus =>
  //           authService.getBusesDetails(bus.id),
  //         );
  //         try {
  //           const details = await Promise.all(detailsPromises);
  //           setBusDetails(details.flat());
  //         } catch (error) {
  //           console.error('Failed to fetch bus details:', error);
  //         }
  //       }

  //       if (selectedDate === today) {
  //         const detailsPromises = busesToLocation.map(bus =>
  //           authService.getBusesDetails(bus.busID),
  //         );
  //         try {
  //           const details = await Promise.all(detailsPromises);
  //           setBusDetails(details.flat());
  //         } catch (error) {
  //           console.error('Failed to fetch bus details:', error);
  //         }
  //       }
  //     };

  //     if (busesToLocation.length > 0) {
  //       fetchBusDetails();
  //       console.log('getBusDetails hh', getBusDetails);
  //     }
  //   }, [busesToLocation]);
  const handleReservePress = busID => {
    navigation.navigate('BusDetailsReservation', {busID, selectedDate});
  };
  return (
    // <View>
    //   <Text>PassengerSearchReservation</Text>
    //   <Text>{startLocation}</Text>
    //   <Text>{endLocation}</Text>
    //   <Text>{selectedDate}</Text>
    //   <Text>{currentDate}</Text>
    //   {busesToLocation && busesToLocation.length > 0
    //     ? selectedDate === today
    //       ? busesToLocation.map((bus, index) => (
    //           <Text key={index}>{bus.busID.toString()}</Text> // Assuming bus is a string or has a toString() method
    //         ))
    //       : busesToLocation.map((bus, index) => (
    //           <Text key={index}>{bus.id.toString()}</Text> // Assuming bus is a string or has a toString() method
    //         ))
    //     : null}
    // </View>
    <View style={styles.container}>
      <FlatList
        data={getBusDetails}
        renderItem={({item}) => (
          <Item
            busID={trimString(item.busID, 10)}
            from={startLocation}
            to={endLocation}
            busStatus={item.isStarted.toString()}
            onPress={() => handleReservePress(item)}
          />
        )}
        keyExtractor={item => item.busID}
        style={{marginTop: 10, marginBottom: 10}}
      />
    </View>
  );
};
function trimString(str: string, length: number): string {
  return str.length > length ? str.substring(0, length) + '...' : str;
}
export default PassengerSearchReservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ff9e66',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
