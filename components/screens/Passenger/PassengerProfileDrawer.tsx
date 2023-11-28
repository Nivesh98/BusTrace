import {Text} from '@react-native-material/core';
import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const PassengerProfileDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fcd7d7'}}>
      <ImageBackground
        source={require('../../assets/images/header_background_passenger.png')}
        style={{
          paddingRight: 35,
          paddingLeft: 35,
          paddingTop: 35,
          paddingBottom: -35,
          height: '60%',
        }}>
        <Image
          source={require('../../assets/images/profile-avatar.png')}
          style={{
            height: 140,
            width: 140,
            borderRadius: 80,
            alignSelf: 'center',
            paddingTop: 0,
            marginTop: 25,
            borderColor: '#fff',
            borderWidth: 7,
          }}
        />
      </ImageBackground>
      <Text
        style={{
          marginTop: -140,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#781818',
          fontSize: 18,
          fontFamily: 'DancingScript-Bold',
        }}>
        Kamal Perera
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '100',
          color: '#781818',
          fontSize: 15,
          fontFamily: 'Roboto-Regular',
        }}>
        kamal@gmail.com
      </Text>
      <View
        style={{
          width: '90%',
          height: 50,
          flexDirection: 'row',
          margin: 5,
          marginTop: 10,
          backgroundColor: '#fff',
          borderRadius: 40,
          alignSelf: 'center',
        }}>
        <Icon name="person" size={43} color="#cc2f2f" style={{padding: 2}} />
        <View
          style={{
            width: '100%',
            marginLeft: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#913434',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 2,
              paddingBottom: 2,
              fontFamily: 'Roboto-Bold',
            }}>
            User Name
          </Text>
          <Text
            style={{
              color: '#913434',
              paddingLeft: 5,
              paddingRight: 5,
              paddingBottom: 2,
              fontFamily: 'Roboto-Regular',
            }}>
            @kamal_perera
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 50,
          flexDirection: 'row',
          margin: 5,
          marginTop: 10,
          backgroundColor: '#fff',
          borderRadius: 40,
          alignSelf: 'center',
        }}>
        <Icon name="call" size={43} color="#cc2f2f" style={{padding: 2}} />
        <View
          style={{
            width: '100%',
            marginLeft: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#913434',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 2,
              paddingBottom: 2,
              fontFamily: 'Roboto-Bold',
            }}>
            Phone Number
          </Text>
          <Text
            style={{
              color: '#913434',
              paddingLeft: 5,
              paddingRight: 5,
              paddingBottom: 2,
              fontFamily: 'Roboto-Regular',
            }}>
            0767089918
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 50,
          flexDirection: 'row',
          margin: 5,
          marginTop: 10,
          backgroundColor: '#fff',
          borderRadius: 40,
          alignSelf: 'center',
        }}>
        <Icon
          name="location-on"
          size={43}
          color="#cc2f2f"
          style={{padding: 2}}
        />
        <View
          style={{
            width: '100%',
            marginLeft: 5,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#913434',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 2,
              paddingBottom: 2,
              fontFamily: 'Roboto-Bold',
            }}>
            Address
          </Text>
          <Text
            style={{
              color: '#913434',
              paddingLeft: 5,
              paddingRight: 5,
              paddingBottom: 2,
              fontFamily: 'Roboto-Regular',
            }}>
            No 50/B Rajamawatha
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PassengerProfileDrawer;
