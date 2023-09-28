import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {HomeScreenDriver} from '../screens/HomeScreenDriver';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {SplashScreen} from '../screens/SplashScreen';
import {TabNavigator} from './TabNavigator';

import FirebaseAuthService from '../Services/FirebaseAuthService';
import firebaseConfig from '../Services/firebaseConfig';

const firebaseService = new FirebaseAuthService(firebaseConfig);

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const currentUser = firebaseService.getCurrentUserId();
  console.log('authstack currentUser', currentUser);
  if (currentUser !== null) {
    console.log('authstack user available');
  } else {
    console.log('authstack not user');
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="DriverHome" component={HomeScreenDriver} />
    </Stack.Navigator>
  );
};
