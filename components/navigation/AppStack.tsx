import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from '../screens/SplashScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
