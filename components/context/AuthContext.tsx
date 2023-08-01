import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

interface UserContextType {
  isLoading: boolean;
  userToken: string;
  login: () => void;
  logout: () => void;
  guestCeck: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setUserToken: (userToken: string) => void;
}

export const AuthContext = createContext<UserContextType>({
  isLoading: false,
  userToken: '',
  login: () => {},
  logout: () => {},
  guestCeck: () => {},
  setIsLoading: () => {},
  setUserToken: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>('');

  const login = () => {
    if (userToken === null) {
      console.log('if login ', userToken);
    }
    setIsLoading(true);
    setUserToken('ioiokfjdk');
    console.log('Login', {isLoading}, {userToken});
    AsyncStorage.setItem('userToken', 'ioiokfjdk');
    setIsLoading(false);
  };

  const logout = () => {
    if (userToken === null) {
      console.log('if logout ', userToken);
    }
    setIsLoading(true);
    setUserToken('');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
    console.log('logout', {isLoading}, {userToken});
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
      setIsLoading(false);
    } catch (e) {
      console.log('isLogged in error ${e}');
    }
  };

  const guestCeck = () => {
    setUserToken('ioiokfjdk');
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
    guestCeck,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
