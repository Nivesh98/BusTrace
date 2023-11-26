import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';

import {AuthProvider} from './components/context/AuthContext';
import {MainNavigator} from './components/navigation/MainNavigator';

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
