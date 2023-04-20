import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Home');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};
