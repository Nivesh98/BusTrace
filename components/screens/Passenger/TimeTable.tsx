//---------------
import {Text} from '@react-native-material/core';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CalendarPicker, {
  DateChangedCallback,
} from 'react-native-calendar-picker';
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
  const [getDate, setDate] = useState<string>('');
  const [getCurrentDate, setCurrentDate] = useState<string>('');
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    // Fetch the current user asynchronously
    const fetchCurrentUser = () => {
      setCurrentDate(new Date().toLocaleDateString());
    };

    fetchCurrentUser();
  }, []);
  const calculateDisabledDates = () => {
    const disabledDates: Date[] = [];
    const currentDate = moment();
    for (let i = 1; i <= 7; i++) {
      const disabledDate = currentDate.clone().add(i, 'days').toDate();
      disabledDates.push(disabledDate);
    }
    return disabledDates;
  };

  const onDateChange: DateChangedCallback = date => {
    // Handle date change
    setSelectedDate(date.toDate());
    console.log('selectedDate', selectedDate?.toLocaleDateString());
    setCurrentDate(date.toDate().toLocaleDateString());
  };

  // const minDate = moment();
  // const maxDate = moment().add(7, 'days');
  // const disabledDates = calculateDisabledDates();
  const today = moment();
  const minDate = today.toDate();
  const maxDate = today.clone().add(7, 'days').toDate();
  console.log('minDatev', minDate);
  console.log('maxDate', maxDate);
  const disabledDates = calculateDisabledDates();
  console.log('disabledDates', disabledDates);

  //setCurrentDate(fullDate);
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
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    console.log(
      'selectedCountry1',
      selectedCountry1,
      'selectedCountry2',
      selectedCountry2,
    );
  };

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
      <View style={styles.dateSearch}>
        <TouchableOpacity
          onPress={toggleCalendar}
          style={{width: '60%'}}
          disabled={selectedCountry1 === '' || selectedCountry2 === ''}>
          <Text style={styles.searchtext}>{getCurrentDate}</Text>
        </TouchableOpacity>

        <View style={{alignSelf: 'auto', marginLeft: 5}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              backgroundColor: '#e83a05',
              borderRadius: 10,
              alignContent: 'center',
              alignItems: 'center',
              padding: 4,
            }}
            disabled={selectedCountry1 === '' || selectedCountry2 === ''}>
            <Text style={{color: '#fff', fontWeight: '100', padding: 4}}>
              Search
            </Text>
            <Image
              source={require('./../../assets/images/search.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showCalendar && (
        <View style={styles.calender}>
          <CalendarPicker
            width={300}
            minDate={minDate}
            maxDate={maxDate}
            selectedStartDate={selectedDate}
            onDateChange={onDateChange}
          />
        </View>
      )}
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

export default TimeTable;
