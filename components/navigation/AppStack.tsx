import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import FirebaseAuthService from '../Services/FirebaseAuthService';
import firebaseConfig from '../Services/firebaseConfig';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {RegisterScreen} from '../screens/Auth/RegisterScreen';
import DriverDrawerNavigation from './DriverDrawerNavigation';
import PassengerDrawerNavigation from './PassengerDrawerNavigation';

const firebaseService = new FirebaseAuthService(firebaseConfig);

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const [currentUserX, setCurrentUser] = useState(null);
  const [checkCurrentUser, setCheckCurrentUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the current user asynchronously
    firebaseService.initAuthStateListener().then(() => {
      fetchData();
    });
  }, []);

  const fetchData = async () => {
    try {
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

      setLoading(false);
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
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

  // let ScreenComponent;

  // if (checkCurrentUser) {
  //   if (currentUserX === 'Passenger') {
  //     ScreenComponent = (
  //       <Stack.Screen name="Home" component={PassengerDrawerNavigation} />
  //     );
  //   } else {
  //     ScreenComponent = (
  //       <Stack.Screen name="DriverHome" component={DriverDrawerNavigation} />
  //     );
  //   }
  // } else {
  //   ScreenComponent = <Stack.Screen name="Login" component={LoginScreen} /><Stack.Screen name="Register" component={RegisterScreen} />;
  // }

  // return (
  //   <Stack.Navigator screenOptions={{headerShown: false}}>
  //     {ScreenComponent}
  //   </Stack.Navigator>
  // );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {checkCurrentUser ? (
        currentUserX === 'Passenger' ? (
          <Stack.Screen name="Home" component={PassengerDrawerNavigation} />
        ) : (
          <Stack.Screen name="DriverHome" component={DriverDrawerNavigation} />
        )
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
