import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

interface UserContextType {
  isLoading: boolean;
  userToken: string;
  login: () => void;
  logout: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setUserToken: (userToken: string) => void;
}

export const AuthContext = createContext<UserContextType>({
  isLoading: false,
  userToken: '',
  login: () => {},
  logout: () => {},
  setIsLoading: () => {},
  setUserToken: () => {},
});

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>('');

  const login = () => {
    setUserToken('ioiokfjdk');
    setIsLoading(true);
    console.log('Login', {isLoading}, {userToken});
    AsyncStorage.setItem('userToken', 'ioiokfjdk');
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken('');
    setIsLoading(false);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
    console.log('logout', {isLoading}, {userToken});
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userTokenLogged: string = await AsyncStorage.getItem('userToken');
      setUserToken(userTokenLogged);
      setIsLoading(false);
    } catch (e) {
      console.log('isLogged in error ${e}');
    }
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
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
