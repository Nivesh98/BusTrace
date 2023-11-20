// import {Text} from '@react-native-material/core';
// import React, {useState} from 'react';
// import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
// import DropDown from '../../CustomComponent/DropDown';
// import FirebaseAuthService from '../../Services/FirebaseAuthService';
// import firebaseConfig from '../../Services/firebaseConfig';

// const authService = new FirebaseAuthService(firebaseConfig);

// const countries = [
//   {value: 'Benin', key: '229'},
//   {value: 'Bermuda', key: '1-441'},
//   {value: 'Bhutan', key: '975'},
//   {value: 'Bolivia', key: '591'},
//   {value: 'Bosnia and Herzegovina', key: '387'},
//   {value: 'Botswana', key: '267'},
// ];

// const TimeTable: React.FC = () => {
//   const [selectedCountry1, setSelectedCountry1] = useState<string>('');
//   const [selectedCountry2, setSelectedCountry2] = useState<string>('');
//   const [filterdata, setSFilterData] = useState<
//     {destinations: string; routeNo: string}[]
//   >([]);

//   const handleSelection1 = (selectedItem: string) => {
//     setSelectedCountry1(selectedItem);
//   };

//   const handleSelection2 = (selectedItem: string) => {
//     setSelectedCountry2(selectedItem);
//   };
//   //const extractedDataArray: {destinations: string; routeNo: string}[] = [];
//   const swapSelections = (country1: string, country2: string) => {
//     // Implement your logic to swap selections here
//     console.log(`Swapping selections: ${country1} and ${country2}`);
//     setSelectedCountry1(country2);
//     setSelectedCountry2(country1);
//     console.log(`Swapping selections: ${country1} and ${country2}`);
//     console.log('Retrieved data:', storedData);
//     //const extractedDataArray = [];

//     authService.getStoredIntercityBusData().then(data => {
//       if (data && data.length > 0) {
//         data.forEach(item => {
//           const extractedData = {
//             destinations: item.destinations,
//             routeNo: item.routeNo,
//           };

//           setSFilterData(extractedData);
//         });

//         // Now extractedDataArray contains the desired data
//         console.log('Extracted Data Array:', filterdata);
//       } else {
//         console.log('No data found.');
//       }
//     });
//   };

//   //   const busRoutes = authService.getBusRoute().then(() => {});
//   //   const userData: {value: string; key: string}[] = [];

//   const storedData = authService.getStoredIntercityBusData();
//   //   const extractedData = storedData._j.map(item => {
//   //     if (item.destination1) {
//   //       return {
//   //         value: item.destination1,
//   //       };
//   //     }
//   //     // Handle cases where "destination1" is missing
//   //     return {
//   //       value: 'N/A', // Not available
//   //     };
//   //   });

//   //   console.log('Extracted data:', extractedData);
//   return (
//     <View style={styles.container}>
//       <View style={styles.dropdownContainer}>
//         <DropDown
//           onSelectionChange={handleSelection1}
//           data={countries}
//           selectedValue={selectedCountry1} // Pass the selected value
//         />
//       </View>
//       <TouchableOpacity
//         style={styles.swapBtn}
//         onPress={() => swapSelections(selectedCountry1, selectedCountry2)}>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={styles.swaptext}>Swap</Text>
//           <Image
//             source={require('./../../assets/images/swap_icon.png')}
//             style={{width: 20, height: 20}}
//           />
//         </View>
//       </TouchableOpacity>

//       <View style={styles.dropdownContainer2}>
//         <DropDown
//           onSelectionChange={handleSelection2}
//           data={countries}
//           selectedValue={selectedCountry2} // Pass the selected value
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   dropdownContainer: {
//     width: '100%',
//     zIndex: 2,
//     marginTop: 10,
//     position: 'absolute',
//   },
//   dropdownContainer2: {
//     width: '100%',
//     zIndex: 1,
//     position: 'absolute',
//     marginTop: 95,
//   },
//   swapBtn: {
//     alignSelf: 'flex-end',
//     marginRight: 20,
//     borderRadius: 10,
//     borderWidth: 0.5,
//     marginBottom: 4,
//     marginTop: 65,
//     padding: 1,
//   },
//   swaptext: {
//     fontSize: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default TimeTable;

//---------------
import {Text} from '@react-native-material/core';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import DropDown from '../../CustomComponent/DropDown';
import FirebaseAuthService from '../../Services/FirebaseAuthService';
import firebaseConfig from '../../Services/firebaseConfig';

const authService = new FirebaseAuthService(firebaseConfig);

const countries = [
  {key: 'EX 1-1_1', value: 'Makumbara Bus Stand'},
  {key: 'EX 1-1_2', value: 'Matara'},
  {key: '03_1', value: 'Bastian Mawatha - Fort'},
  {key: '03_2', value: 'Kataragama'},
  {key: '240_1', value: 'Pettah'},
  {key: '240_2', value: 'Negombo'},
  {key: '255_1', value: 'Mount Lavinia'},
  {key: '255_2', value: 'Kottawa'},
  {key: '400_2', value: 'Aluthgama'},
  {key: '400/1_1', value: 'Kaluthara'},
  {key: '401_1', value: 'Elpitiya'},
  {key: '401/2_2', value: 'Goluwamulla'},
  {key: '401/3_2', value: 'Uragasmanhandiya'},
  {key: '430_1', value: 'Mathugama'},
  {key: '04_2', value: 'Anuradhapura CTB'},
  {key: '450_1', value: 'Panadura SLBT'},
  {key: '450_2', value: 'Ratnapura'},
  {key: '602_1', value: 'Kandy - Good Shed'},
  {key: '602_2', value: 'Kurunegala'},
  {key: '07_2', value: 'Kalpitiya'},
  {key: '08_2', value: 'Matale (Colombo)'},
  {key: '09_1', value: 'Central Bus Stop - Fort'},
  {key: '09_2', value: 'Teldeniya'},
  {key: '09/1_2', value: 'Wattegama'},
  {key: '09/2_2', value: 'Digana'},
  {key: '10_2', value: 'Kandy - Colombo Intercity'},
  {key: 'EX001_2', value: 'Galle Central Bus Station'},
  {key: '13_2', value: 'Dayagama'},
  {key: '14_2', value: 'Monaragala'},
  {key: '15_2', value: 'Anuradhapura'},
  {key: '16_2', value: 'Nawalapitiya'},
  {key: '17_2', value: 'Panadura Bus Stop (private buses)'},
  {key: '18_1', value: 'Fort'},
  {key: '18_2', value: 'Hatton'},
  {key: '21_2', value: 'Badulla Bus Station'},
  {key: '22_2', value: 'Ampara'},
  {key: '31_2', value: 'Bandarawela'},
  {key: 'EX 1-2_1', value: 'Kaduwela'},
  {key: '32/4_2', value: 'Tangalle'},
  {key: '41_2', value: 'Kaduruwela'},
  {key: '45_2', value: 'Trincomalee'},
  {key: '48_2', value: 'Kalmunai'},
  {key: '60_1', value: 'Deniyaya'},
  {key: 'EX 1-21_1', value: 'Kadawatha'},
  {key: '79_2', value: 'Nuwara Eliya'},
  {key: '87_2', value: 'Jaffna'},
  {key: '98_1', value: 'Arugam Bay Pick Up'},
  {key: '100 U_2', value: 'Colombo Fort'},
  {key: '101 U_1', value: 'Moratuwa'},
  {key: '102U_2', value: 'Kotahena Bus Stop'},
  {key: '103_2', value: 'Park Road - Park Avenue'},
  {key: '104_1', value: 'Ja Ela'},
  {key: '104_2', value: 'Bambalapitiya'},
  {key: '112_1', value: 'Maharagama'},
  {key: '113_2', value: 'Udahamulla'},
  {key: '117_1', value: 'Ratmalana Airport'},
  {key: '117_2', value: 'Nugegoda Supermarket'},
  {key: '119_1', value: 'Maharagama-Dehiwela Road'},
  {key: '119_2', value: 'Dehiwala Main Bus Stop'},
  {key: '120_2', value: 'Piliyandala'},
  {key: '122_2', value: 'Avissawella'},
  {key: '125_2', value: 'Padukka'},
  {key: '135_1', value: 'Kohuwala'},
  {key: '135_2', value: 'Kelaniya'},
  {key: '138_2', value: 'Homagama'},
  {key: '138/1_1', value: 'Kirillawala'},
  {key: '138/2_1', value: 'Mattegoda'},
  {key: '138/3_1', value: 'Rukmalgama'},
  {key: '140_1', value: 'Kollupitiya'},
  {key: '140_2', value: 'Wellampitiya'},
  {key: '143_1', value: 'Hanwella'},
  {key: '144_1', value: 'Rajagiriya'},
  {key: '145_1', value: 'Gangarama - Slave Island'},
  {key: '145_2', value: 'Mattakkuliya'},
  {key: '152_2', value: 'Angoda'},
  {key: '153_1', value: 'Borella'},
  {key: '153_2', value: 'Sri J’pura Hospital (Nawarohala)'},
  {key: '154_1', value: 'Angulana'},
  {key: '154_2', value: 'Kiribathgoda'},
  {key: '155_2', value: 'Soysapura'},
  {key: '163_2', value: 'Battaramulla'},
  {key: '164_1', value: 'Town Hall Bus Stand'},
  {key: '164_2', value: 'Salmal Uyana Bus Stand'},
  {key: '166_2', value: 'Mulleriyawa'},
  {key: '170_1', value: 'Athurugiriya'},
  {key: '171_2', value: 'Koswatta'},
  {key: 'A-Bay_1', value: 'Maradana Police Bus Stop'},
  {key: 'A-Bay_2', value: 'Akkaraipattu'},
  {key: '175_1', value: 'Kohilawatta'},
  {key: '175_2', value: 'Kollupitiya Bus Stop'},
  {key: '178_1', value: 'Narahenpita'},
  {key: '179_2', value: 'Bambalapitiya Junction'},
  {key: '180_1', value: 'Nittambuwa'},
  {key: '187 E-03_1', value: 'Katunayake Airport Bus Station'},
  {key: '187/1_1', value: 'Ekala'},
  {key: '188_1', value: 'Raddolugama'},
  {key: '190_2', value: 'Godagama'},
  {key: '200_1', value: 'Gampaha'},
  {key: '224_1', value: 'Pugoda'},
  {key: '225_1', value: 'Kirindiwala'},
  {key: '226_1', value: 'Malwana'},
  {key: '234_1', value: 'Delgoda'},
];

const TimeTable: React.FC = () => {
  const [selectedCountry1, setSelectedCountry1] = useState<string>('');
  const [selectedCountry2, setSelectedCountry2] = useState<string>('');
  const [filterdata, setSFilterData] = useState<{value: string; key: string}[]>(
    [],
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await authService.getStoredIntercityBusData();
  //     if (data && data.length > 0) {
  //       const extractedData = data.map(item => ({
  //         value: item.destinations,
  //         key: item.routeNo,
  //       }));
  //       setSFilterData(extractedData);
  //       //console.log('Extracted Data Array:', extractedData);
  //     } else {
  //       console.log('No data found.');
  //     }
  //   };

  //   fetchData();
  // }, [filterdata]); // The empty dependency array ensures that this effect runs once after the initial render

  const handleSelection1 = (selectedItem: string) => {
    setSelectedCountry1(selectedItem);
  };

  const handleSelection2 = (selectedItem: string) => {
    setSelectedCountry2(selectedItem);
  };

  const swapSelections = (country1: string, country2: string) => {
    // Implement your logic to swap selections here
    console.log(`Swapping selections: ${country1} and ${country2}`);
    setSelectedCountry1(country2);
    setSelectedCountry2(country1);
    console.log(`Swapping selections: ${country1} and ${country2}`);
    console.log('ex data sssssss', filterdata);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropDown
          onSelectionChange={handleSelection1}
          data={countries}
          selectedValue={selectedCountry1}
        />
      </View>
      <TouchableOpacity
        style={styles.swapBtn}
        onPress={() => swapSelections(selectedCountry1, selectedCountry2)}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.swaptext}>Swap</Text>
          <Image
            source={require('./../../assets/images/swap_icon.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.dropdownContainer2}>
        <DropDown
          onSelectionChange={handleSelection2}
          data={countries}
          selectedValue={selectedCountry2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  dropdownContainer: {
    width: '100%',
    zIndex: 2,
    marginTop: 10,
    position: 'absolute',
  },
  dropdownContainer2: {
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    marginTop: 95,
  },
  swapBtn: {
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 4,
    marginTop: 65,
    padding: 1,
  },
  swaptext: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimeTable;
