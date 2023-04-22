import React, {createContext, useState} from 'react';

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
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken('');
    setIsLoading(false);
  };

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
