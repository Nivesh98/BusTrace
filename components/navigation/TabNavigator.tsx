import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {SeatReservationScreen} from '../screens/SeatReservationScreen';
import {FindBusScreen} from '../screens/FindBusScreen';
import {QRScreen} from '../screens/QRScreen';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: '#dc143c'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Seat"
        component={SeatReservationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="book-online" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FindBus"
        component={FindBusScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="location-searching" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="qr-code-scanner" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
