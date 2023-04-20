import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {ButtonGroup} from './components/ButtonGroup';
import {MainNavigator} from './components/MainNavigator';

const App = () => {
  // const printButtonLabel = item => {
  //   console.log(item);
  // };

  const getNumber = (num: number): number => num;

  const printNumber = (): number => {
    return 1;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <ButtonGroup
          buttons={['One', 'Two']}
          doSomthingAfterClick={printNumber}
        />
        <Text>{getNumber(14)}</Text> */}
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
