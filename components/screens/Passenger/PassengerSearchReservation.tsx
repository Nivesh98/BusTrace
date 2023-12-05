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
import {StyleSheet, View} from 'react-native';
import FirebaseAuthService from '../../Services/FirebaseAuthService';
import firebaseConfig from '../../Services/firebaseConfig';

const authService = new FirebaseAuthService(firebaseConfig);

const PassengerSearchReservation = ({route}) => {
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
        setBusDetails(details);
        console.log('details lll', details);
      } else {
        const details = await Promise.all(
          busesToLocation.map(bus => authService.getBusesDetails(bus.busID)),
        );
        setBusDetails(details);
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
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            busNo={item.busNo}
            date={item.date}
            route={item.route}
            charge={item.charge}
          />
        )}
        keyExtractor={item => item.id}
        style={{marginTop: 10, marginBottom: 10}}
      /> */}
    </View>
  );
};

export default PassengerSearchReservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
