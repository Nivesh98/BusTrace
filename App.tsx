import * as React from 'react';

import {StyleSheet, View, SafeAreaView} from 'react-native';

import {MainNavigator} from './components/MainNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  buttonActive: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  text: {
    color: 'black',
  },
  textActive: {
    color: 'white',
  },
});

export default App;
