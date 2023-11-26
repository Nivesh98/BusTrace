import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#dc143c'}}>
        <ImageBackground
          source={require('../assets/images/gradient-black-transparent.png')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/profile-avatar.png')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text
            style={{color: '#fff', fontSize: 18, fontFamily: 'Roboto-medium'}}>
            Kamal Sandaruwan
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontFamily: 'Roboto-regular'}}>
              2800 Rs
            </Text>
            <View style={{padding: 2}}>
              <Icon name="payments" size={16} color="#fff" />
            </View>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text> Our custom text</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
