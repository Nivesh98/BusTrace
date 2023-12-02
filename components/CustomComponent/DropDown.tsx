import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Item {
  value: string;
  key: string;
}

interface DropDownProps {
  onSelectionChange?: ((selectedItem: string) => void) | undefined;
  data: Item[];
  selectedValue: string | undefined; // New prop for selected value
  disabled?: boolean; // New prop for disabling the dropdown
}

const DropDown: React.FC<DropDownProps> = ({
  onSelectionChange,
  data,
  selectedValue,
  disabled = false,
}) => {
  const [search, setSearch] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<Item[]>(data);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    selectedValue,
  );
  const searchRef = useRef<TextInput | null>(null);

  useEffect(() => {
    // Update the selected value when it changes in props
    setSelectedCountry(selectedValue);
  }, [selectedValue]);

  const onSearch = (search: string) => {
    let tempData;
    if (search !== '') {
      tempData = data.filter(item => {
        return item.value.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setFilteredData(tempData);
    } else {
      setFilteredData(data);
    }
  };

  const handleSelection = (item: Item) => {
    setSelectedCountry(item.value);
    setClicked(false);
    if (onSelectionChange) {
      onSelectionChange(item.value);
    }
    onSearch('');
    setSearch('');
  };

  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontWeight: '600'}}>
          {selectedCountry == '' ? 'Select Location' : selectedCountry}
        </Text>
        {clicked ? (
          <Image
            source={require('./../assets/images/arrow_up.png')}
            style={{width: 20, height: 20}}
          />
        ) : (
          <Image
            source={require('./../assets/images/arrow_down.png')}
            style={{width: 20, height: 20}}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 4,
            height: 200,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              borderWidth: 0.2,
              borderColor: '#8e8e8e',
              borderRadius: 7,
              marginTop: 5,
              paddingLeft: 20,
            }}
          />

          <FlatList
            data={filteredData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedCountry(item.value);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                    handleSelection(item);
                  }}>
                  <Text style={{fontWeight: '600'}}>{item.value}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DropDown;
