import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native'; // Import your RootStackParamList or equivalent

type SplashScreenProps = {
  navigation: any;
};

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const [authLoaded, setAuthLoaded] = useState<Boolean>(false);
  const [animationLoaded, setAnimationAuthLoaded] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (authLoaded && animationLoaded) {
      navigation.replace('Login');
    }
  }, [animationLoaded, authLoaded, navigation]);

  const onAnimationFinish = () => setAnimationAuthLoaded(true);

  return (
    <View style={styles.root}>
      <LottieView
        source={require('../../assets/splash2.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
      <LottieView
        source={require('../../assets/splash.json')}
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
