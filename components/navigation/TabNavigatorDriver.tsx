import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {ChargeDriver} from '../screens/Driver/ChargeDriver';
import {HomeScreenDriver} from '../screens/Driver/HomeScreenDriver';
import {MapDriver} from '../screens/Driver/MapDriver';
import {QRScanerDriver} from '../screens/Driver/QRScanerDriver';

const Tab = createBottomTabNavigator();

export const TabNavigatorDriver = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: true,
        headerStyle: {
          backgroundColor: '#dc143c',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff',
        },
        tabBarStyle: {backgroundColor: '#dc143c'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="DriverHome"
        component={HomeScreenDriver}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerTitle: 'Home',
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Charge"
        component={ChargeDriver}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="book-online" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UpdateBus"
        component={MapDriver}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="location-searching" color={color} size={size} />
          ),
          headerTitle: 'Map',
          title: 'Map',
        }}
      />
      <Tab.Screen
        name="QRScan"
        component={QRScanerDriver}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="qr-code-scanner" color={color} size={size} />
          ),
          headerTitle: 'QR',
          title: 'QR',
        }}
      />
    </Tab.Navigator>
  );
};
