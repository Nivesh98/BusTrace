import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect, useState} from 'react';
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
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserType, setCurrentUserType] = useState(null);

  useEffect(() => {
    // Fetch the current user asynchronously
    const fetchCurrentUser = async () => {
      const userId = await firebaseService.getCurrentUserId();
      if (userId != null) {
        setCurrentUser(userId);
        setLoading(false);

        const userData = await firebaseService.getUserData();
        if (userData !== null) {
          const user = userData.find(user => user.data.userUid === currentUser);
          setCurrentUserType(user?.data.userType);
          console.log('appstack userData', user?.data.userType);
          console.log('appstack user available');
          checkUserScreen();
        }
      }

      console.log('current user', currentUser);
    };

    fetchCurrentUser();
  }, []);

  // if (loading) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }
  let ScreenComponent;
  const checkUserScreen = () => {
    if (currentUser) {
      if (currentUserType === 'Passenger') {
        ScreenComponent = <Stack.Screen name="Home" component={TabNavigator} />;
      }

      if (currentUserType === 'Driver') {
        ScreenComponent = (
          <Stack.Screen name="DriverHome" component={TabNavigatorDriver} />
        );
      }
    } else {
      ScreenComponent = <Stack.Screen name="Login" component={LoginScreen} />;
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {ScreenComponent}
      {/* <Stack.Screen name="Home" component={TabNavigator} /> */}
      {/* {currentUser ? (
        currentUser === 'Passenger' ? (
          <Stack.Screen name="Home" component={TabNavigator} />
        ) : currentUser === 'Driver' ? (
          <Stack.Screen name="DriverHome" component={TabNavigatorDriver} />
        ) : (
          <Stack.Screen name="Splash">
            {() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )}
          </Stack.Screen>
        )
      ) : null} */}
    </Stack.Navigator>
  );
};
