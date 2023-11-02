// import React, {useState} from 'react';
// import {Button, StyleSheet, View} from 'react-native';
// import DropDown from '../../CustomComponent/DropDown';

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

//   const handleSelection1 = (selectedItem: any) => {
//     console.log('selectedItem', selectedItem);
//     setSelectedCountry1(selectedItem.value);
//   };

//   const handleSelection2 = (selectedItem: any) => {
//     console.log('selectedItem', selectedItem);
//     setSelectedCountry2(selectedItem.value);
//   };

//   const swapSelections = (country1: string, country2: string) => {
//     // Implement your logic to swap selections here
//     console.log(`Swapping selections: ${country1} and ${country2}`);
//     // setSelectedCountry1(country2);
//     // setSelectedCountry2(country1);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.dropdownContainer}>
//         <DropDown data={countries} />
//       </View>
//       <View style={styles.dropdownContainer}>
//         <DropDown data={countries} />
//       </View>

//       <Button
//         title="Swap"
//         onPress={() => swapSelections(selectedCountry1, selectedCountry2)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dropdownContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 5,
//     width: '100%',
//   },
// });

// export default TimeTable;

// TimeTable.tsx

import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
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
      <View style={styles.dropdownContainer}>
        <DropDown
          onSelectionChange={handleSelection2}
          data={countries}
          selectedValue={selectedCountry2} // Pass the selected value
        />
      </View>

      <Button
        title="Swap"
        onPress={() => swapSelections(selectedCountry1, selectedCountry2)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: '100%',
  },
});

export default TimeTable;
