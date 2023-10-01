import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {useState} from 'react';
import FirebaseAuthService from '../Services/FirebaseAuthService';
import firebaseConfig from '../Services/firebaseConfig';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {TabNavigator} from './TabNavigator';
import {TabNavigatorDriver} from './TabNavigatorDriver';

const firebaseService = new FirebaseAuthService(firebaseConfig);

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const [currentUserX, setCurrentUser] = useState(null);
  const [checkCurrentUser, setCheckCurrentUser] = useState('');

  firebaseService.initAuthStateListener().then(() => {
    fetchData();
  });

  const fetchData = async () => {
    const currentUser = await firebaseService.getCurrentUserId();

    console.log('appstack currentUser', currentUser);
    if (currentUser !== null) {
      setCheckCurrentUser(currentUser);
      const userData = await firebaseService.getUserData();
      if (userData !== null) {
        const user = userData.find(user => user.data.userUid === currentUser);
        setCurrentUser(user?.data.userType);
        console.log('appstack userData', user?.data.userType);
        console.log('appstack user available');
      }
    } else {
      console.log('appstack not user');
    }
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {checkCurrentUser ? (
        currentUserX === 'Passenger' ? (
          <Stack.Screen name="Home" component={TabNavigator} />
        ) : (
          <Stack.Screen name="DriverHome" component={TabNavigatorDriver} />
        )
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
