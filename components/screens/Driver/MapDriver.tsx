import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const MapDriver = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 5,
  },
});
