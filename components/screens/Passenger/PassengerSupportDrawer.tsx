import React from 'react';
import {Linking, Platform, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PassengerSupportDrawer = () => {
  const phoneNumber = '0767089918';

  const makeCall = () => {
    let phoneNumber = '';

    // Check if the platform is iOS or Android
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${0767089918}';
    } else {
      phoneNumber = 'telprompt:${0767089918}';
    }

    // Use the Linking API to open the phone app
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={{padding: 5}}>
      <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>
        Support Contact Number
      </Text>
      <View
        style={{
          height: 44,
          backgroundColor: '#cc2f2f',
          margin: 5,
          borderRadius: 22,
        }}>
        <TouchableOpacity onPress={makeCall}>
          <Text
            style={{
              color: '#fff',
              alignSelf: 'flex-start',
              paddingTop: 8,
              paddingLeft: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            0767089918
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PassengerSupportDrawer;
