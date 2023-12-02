import {debounce} from 'lodash';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';
import DropDown from '../../CustomComponent/DropDown';

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
export const FindBusScreen = () => {
  const [selectedCountry1, setSelectedCountry1] = useState<string>('');
  const [selectedCountry2, setSelectedCountry2] = useState<string>('');
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentDeltas, setCurrentDeltas] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    //getCurrentLocation();
    const interval = setInterval(() => {
      getCurrentLocation();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const mapRef = useRef(null);
  const getCurrentLocation = () => {
    const latitude = 7.8731;
    const longitude = 80.7718;
    setCurrentLocation({
      latitude,
      longitude,
    });
    console.log('currennt location', currentLocation);
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const {latitude, longitude} = position.coords;
    //     console.log('currennt location', position.coords);
    //     setCurrentLocation({
    //       latitude,
    //       longitude,
    //     });
    //   },
    //   error => console.log('Error getting location:', error),
    //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    // );
  };

  const onRegionChange = debounce((region: Region) => {
    setCurrentDeltas({
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  }, 300); // Adjust the debounce delay
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
    // console.log('ex data sssssss', filterdata);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.3, zIndex: 9999}}>
        <View style={styles.dropdownContainer}>
          <DropDown
            onSelectionChange={handleSelection1}
            data={countries}
            selectedValue={selectedCountry1}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
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
        </View>

        <View style={styles.dropdownContainer2}>
          <DropDown
            onSelectionChange={handleSelection2}
            data={countries}
            selectedValue={selectedCountry2}
          />
        </View>
      </View>

      <MapView
        ref={mapRef}
        style={styles.map}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          ...currentDeltas,
        }}
        onLayout={() =>
          mapRef.current.animateToRegion(
            {
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              ...currentDeltas,
            },
            1500,
          )
        }>
        <Marker
          coordinate={currentLocation}
          title="Current Location"
          description="here"
          image={require('../../assets/images/bus_top_icon.png')}
          style={{width: 20, height: 20}}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    flex: 0.7,
    width: '90%',
  },
  dropdownContainer: {
    width: '100%',
    zIndex: 2,
    marginTop: 10,
    marginLeft: -140,
    position: 'absolute',
  },
  dropdownContainer2: {
    width: '100%',
    marginLeft: -140,
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
  calender: {
    marginTop: 10,
    position: 'relative',
  },
  dateSearch: {
    marginTop: 70,
    position: 'relative',
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  searchtext: {
    borderRadius: 10,
    borderColor: '#e83a05',
    borderWidth: 2,
    padding: 4,
    paddingLeft: 15,
  },
});

// import React, {useEffect} from 'react';
// import {StyleSheet, View} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import {useLocation} from '../../context/LocationContext';

// const FindBusScreen = () => {
//   const {currentLocation, currentDeltas, onRegionChange, locationPermission} =
//     useLocation() || {};

//   useEffect(() => {
//     if (locationPermission) {
//       // Access granted, you can use the location data here
//       console.log('Location permission granted');
//     } else {
//       // Handle the case when permission is not granted
//       console.log('Location permission denied');
//     }
//   }, [locationPermission]);

//   const markerCoordinate = {
//     latitude: currentLocation?.latitude || 0,
//     longitude: currentLocation?.longitude || 0,
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         region={{
//           latitude: markerCoordinate.latitude,
//           longitude: markerCoordinate.longitude,
//           latitudeDelta: currentDeltas?.latitudeDelta || 0.01,
//           longitudeDelta: currentDeltas?.longitudeDelta || 0.01,
//         }}
//         onRegionChange={onRegionChange}>
//         <Marker
//           coordinate={markerCoordinate}
//           title="Current Location"
//           description="here"
//         />
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default FindBusScreen;
