import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {HomeScreenDriver} from '../screens/HomeScreenDriver';
import {TabNavigator} from './TabNavigator';

import FirebaseAuthService from '../Services/FirebaseAuthService';
import firebaseConfig from '../Services/firebaseConfig';

const firebaseService = new FirebaseAuthService(firebaseConfig);

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const fetchData = async () => {
    const currentUser = await firebaseService.getCurrentUserId();
    console.log('appstack currentUser', currentUser);
    if (currentUser !== null) {
      const userData = await firebaseService.getUserData();
      if (userData !== null) {
        const user = userData.find(user => user.data.userUid === currentUser);
        console.log('appstack userData', user?.data.userType);
        console.log('appstack user available');
      }
    } else {
      console.log('appstack not user');
    }
  };

  fetchData();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="DriverHome" component={HomeScreenDriver} />
    </Stack.Navigator>
  );
};
