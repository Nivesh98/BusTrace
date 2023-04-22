import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from './screens/LoginScreen';
import {SplashScreen} from './screens/SplashScreen';
import {RegisterScreen} from './screens/RegisterScreen';
import {HomeScreen} from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
