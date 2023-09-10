import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';

import {ActivityIndicator} from '@react-native-material/core';
import {View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {AppStack} from '../navigation/AppStack';
import {AuthStack} from './AuthStack';
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
      {userToken !== '' ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
