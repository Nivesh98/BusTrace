import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState<Boolean>(false);
  const [animationLoaded, setAnimationAuthLoaded] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (authLoaded && animationLoaded) {
      props.navigation.replace('Home');
    }
  }, [animationLoaded, authLoaded, props.navigation]);

  const onAnimationFinish = () => setAnimationAuthLoaded(true);

  return (
    <View style={styles.root}>
      <LottieView
        source={require('../assests/splash2.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
      <LottieView
        source={require('../assests/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
