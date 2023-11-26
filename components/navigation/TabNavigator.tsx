import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {FindBusScreen} from '../screens/Passenger/FindBusScreen';

import {HomeScreen} from '../screens/Passenger/HomeScreen';
import {QRScreen} from '../screens/Passenger/QRScreen';
import TimeTable from '../screens/Passenger/TimeTable';
const Tab = createBottomTabNavigator();

interface CurrentTabContextType {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrentTabContext = React.createContext<CurrentTabContextType>({
  currentTab: 'Home2',
  setCurrentTab: () => {},
});

export const TabNavigator: React.FC<{navigation: any}> = ({navigation}) => {
  const {setCurrentTab} = useContext(CurrentTabContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e: any) => {
      // Prevent default behavior
      e.preventDefault();

      // Extract tab name and update the context
      const tabName = e.target.split('-')[0];
      setCurrentTab(tabName);

      // Navigate to the pressed tab
      navigation.navigate(tabName);
    });

    return unsubscribe;
  }, [navigation, setCurrentTab]);

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
