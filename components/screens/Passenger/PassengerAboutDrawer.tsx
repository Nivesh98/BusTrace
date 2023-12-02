import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PassengerAboutDrawer = () => {
  const appInfo = {
    name: 'BusTrace',
    version: '1.0.0',
    description:
      "BusTrace is a mobile based bus tracking and booking system. we provide you with the facilities of tracking the busses' location, book seats and do the payments for the tickets in your own convenience which is available 24/7 and economical",
    // Add more app related information here
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>{appInfo.name}</Text>
      <Text style={styles.info}>Version: {appInfo.version}</Text>
      <Text style={styles.info1}>{appInfo.description}</Text>
      {/* Render more app information here */}
    </View>
  );
};

export default PassengerAboutDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  info1: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  // Add more styles if needed
});
