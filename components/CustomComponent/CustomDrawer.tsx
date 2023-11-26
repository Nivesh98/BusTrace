import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../context/AuthContext';
const CustomDrawer = props => {
  const {logout} = useContext(AuthContext);
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
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 20,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="logout" size={22} color="#330000" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: '#330000',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
