import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuth} from 'firebase/auth';
import React, {ReactNode, createContext, useEffect, useState} from 'react';
import FirebaseAuthService from '../Services/FirebaseAuthService';
import firebaseAuthCheck from '../Services/firebaseAuthCheck';
import firebaseConfig from '../Services/firebaseConfig';

const firebaseService = new FirebaseAuthService(firebaseConfig);

interface UserContextType {
  isLoading: boolean;
  userToken: string;
  login: () => void;
  logout: () => void;
  guestCheck: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setUserToken: (userToken: string) => void;
}

export const AuthContext = createContext<UserContextType>({
  isLoading: false,
  userToken: '',
  login: () => {},
  logout: () => {},
  guestCheck: () => {},
  setIsLoading: () => {},
  setUserToken: () => {},
});

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>('');

  const login = async () => {
    if (userToken === '') {
      console.log('if login ', userToken);
    }
    setIsLoading(true);
    setUserToken('1');
    console.log('Login', {isLoading}, {userToken});
    AsyncStorage.setItem('userToken', '1').finally(() => setIsLoading(false));
  };

  const logout = async () => {
    try {
      console.log(
        'auth context getAuth(firebaseAuthCheck).currentUser?.uid',
        getAuth(firebaseAuthCheck).currentUser?.uid,
      );
      await firebaseService.signOut();
      console.log('User signed out successfully.');
      //Alert.alert('User signed out!');
      if (userToken === '') {
        console.log('if logout ', userToken);
      }
      setIsLoading(true);
      setUserToken('');
      AsyncStorage.removeItem('userToken').finally(() => setIsLoading(false));
      console.log('logout', {isLoading}, {userToken});
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userTokenLogged = await AsyncStorage.getItem('userToken');
      if (userTokenLogged === null) {
        userTokenLogged = '';
        console.log('if function ', userTokenLogged);
      }
      console.log(userTokenLogged);
      setUserToken(userTokenLogged);
    } catch (e) {
      console.log(`isLoggedIn error ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  const guestCheck = () => {
    setUserToken('1');
    setIsLoading(true);
    setIsLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const contextValue: UserContextType = {
    isLoading,
    userToken,
    setIsLoading,
    setUserToken,
    login,
    logout,
    guestCheck,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
