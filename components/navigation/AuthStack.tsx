import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import FirebaseAuthService from '../Services/FirebaseAuthService';
import firebaseConfig from '../Services/firebaseConfig';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {RegisterScreen} from '../screens/Auth/RegisterScreen';
import {SplashScreen} from '../screens/Splash/SplashScreen';
import {TabNavigator} from './TabNavigator';
import {TabNavigatorDriver} from './TabNavigatorDriver';

const firebaseService = new FirebaseAuthService(firebaseConfig);

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const currentUser = firebaseService.getCurrentUserId();
  console.log('authstack currentUser', currentUser);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      {currentUser ? (
        currentUser === 'Passenger' ? (
          <Stack.Screen name="Home" component={TabNavigator} />
        ) : (
          <Stack.Screen name="DriverHome" component={TabNavigatorDriver} />
        )
      ) : null}
    </Stack.Navigator>
  );
};
