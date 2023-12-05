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

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import FirebaseAuthService from '../../Services/FirebaseAuthService';
import firebaseConfig from '../../Services/firebaseConfig';

const authService = new FirebaseAuthService(firebaseConfig);

const PassengerSearchReservation = ({route}) => {
  const {startLocation, endLocation, selectedDate, currentDate} = route.params;
  const [busesToLocation, setBusesToLocation] = useState([]);

  useEffect(() => {
    const fetchBuses = async () => {
      const buses = await authService.getBusesToLocation(endLocation);
      setBusesToLocation(buses);
      console.log(buses);

      const dates = await authService.getTimeTable(selectedDate.toString());
      console.log('dates ggggggggg', dates);
    };

    fetchBuses();
  }, [endLocation]); // Dependency on endLocation

  return (
    <View>
      <Text>PassengerSearchReservation</Text>
      <Text>{startLocation}</Text>
      <Text>{endLocation}</Text>
      <Text>{selectedDate}</Text>
      <Text>{currentDate}</Text>
      {busesToLocation.map((bus, index) => (
        <Text key={index}>{bus.busID.toString()}</Text> // Assuming bus is a string or has a toString() method
      ))}
    </View>
  );
};

export default PassengerSearchReservation;
