import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {TabNavigator} from './TabNavigator';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
};
