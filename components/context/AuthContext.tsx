import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {ReactNode, createContext, useEffect, useState} from 'react';

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

  const login = () => {
    if (userToken === '') {
      console.log('if login ', userToken);
    }
    setIsLoading(true);
    setUserToken('1');
    console.log('Login', {isLoading}, {userToken});
    AsyncStorage.setItem('userToken', '1').finally(() => setIsLoading(false));
  };

  const logout = () => {
    if (userToken === '') {
      console.log('if logout ', userToken);
    }
    setIsLoading(true);
    setUserToken('');
    AsyncStorage.removeItem('userToken').finally(() => setIsLoading(false));
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
