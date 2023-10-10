import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
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
  const [loading, setLoading] = useState(true);
  const [currentUserType, setCurrentUserType] = useState(null);

  useEffect(() => {
    // Fetch the current user asynchronously
    const fetchCurrentUser = async () => {
      try {
        const userId = await firebaseService.getCurrentUserId();
        if (userId != null) {
          const userData = await firebaseService.getUserData();
          if (userData !== null) {
            const user = userData.find(user => user.data.userUid === userId);
            setCurrentUserType(user?.data.userType);
          }
        }
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  if (loading) {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Loading">
          {() => (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={currentUserType === 'Driver' ? 'DriverHome' : 'Home'}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {currentUserType === 'Passenger' && (
        <Stack.Screen name="Home" component={TabNavigator} />
      )}
      {currentUserType === 'Driver' && (
        <Stack.Screen name="DriverHome" component={TabNavigatorDriver} />
      )}
    </Stack.Navigator>
  );
};
