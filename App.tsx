import * as React from 'react';

import {StyleSheet, View, SafeAreaView} from 'react-native';

import {MainNavigator} from './components/navigation/MainNavigator';
import {AuthProvider} from './components/context/AuthContext';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
