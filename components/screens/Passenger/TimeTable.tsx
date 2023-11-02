import {Text} from '@react-native-material/core';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import DropDown from '../../CustomComponent/DropDown';

const countries = [
  {value: 'Benin', key: '229'},
  {value: 'Bermuda', key: '1-441'},
  {value: 'Bhutan', key: '975'},
  {value: 'Bolivia', key: '591'},
  {value: 'Bosnia and Herzegovina', key: '387'},
  {value: 'Botswana', key: '267'},
];

const TimeTable: React.FC = () => {
  const [selectedCountry1, setSelectedCountry1] = useState<string>('');
  const [selectedCountry2, setSelectedCountry2] = useState<string>('');

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
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropDown
          onSelectionChange={handleSelection1}
          data={countries}
          selectedValue={selectedCountry1} // Pass the selected value
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
          selectedValue={selectedCountry2} // Pass the selected value
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
  },
  dropdownContainer2: {
    width: '100%',
    zIndex: 1,
  },
  swapBtn: {
    alignSelf: 'flex-end',
    marginRight: 19,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 4,
    marginTop: 4,
    padding: 1,
  },
  swaptext: {
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TimeTable;
