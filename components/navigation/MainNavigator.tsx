import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/LoginScreen';
import {SplashScreen} from '../screens/SplashScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {AuthContext} from '../context/AuthContext';
import {View} from 'react-native';
import {ActivityIndicator} from '@react-native-material/core';
import {AppStack} from '../navigation/AppStack';
import {AuthStack} from './AuthStack';

const Stack = createNativeStackNavigator();
let i: number = 1;
export const MainNavigator = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  console.log('click login ', i);
  console.log('Main Navigation', {isLoading}, {userToken});
  i++;
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* console.log('Inside Main Navigation', {isLoading}, {userToken}); */}
      {userToken !== '' ? <AppStack /> : <AuthStack />}
      {/* <Stack.Navigator initialRouteName="Splash">
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
