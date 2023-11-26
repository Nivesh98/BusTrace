import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {FindBusScreen} from '../screens/Passenger/FindBusScreen';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen} from '../screens/Passenger/HomeScreen';
import {QRScreen} from '../screens/Passenger/QRScreen';
import TimeTable from '../screens/Passenger/TimeTable';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        tabBarShowLabel: true,
        headerShown: true,
        headerStyle: {backgroundColor: '#dc143c'},
        headerTitleStyle: {fontWeight: 'bold', color: '#fff'},
        tabBarStyle: {backgroundColor: '#dc143c'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
        headerLeft: () => (
          // <Button onPress={() => navigation.toggleDrawer()} title="Menu" />
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" size={24} color={'#fff'} />
          </TouchableOpacity>
        ),
      })}>
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerTitle: 'Home',
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={TimeTable}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="book-online" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Find Bus"
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
