import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export const ButtonGroup = ({buttons, doSomthingAfterClick}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>One</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
