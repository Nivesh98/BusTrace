import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
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
