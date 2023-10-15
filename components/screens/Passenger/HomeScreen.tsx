import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import JsonData from '../../JsonData/IntercityBusRoute.json';
import FirebaseAuthService from '../../Services/FirebaseAuthService';
import firebaseConfig from '../../Services/firebaseConfig';
import {AuthContext} from '../../context/AuthContext';
const firebaseService = new FirebaseAuthService(firebaseConfig);
export const HomeScreen: React.FC = () => {
  const {logout} = useContext(AuthContext);
  const {userToken, isLoading} = useContext(AuthContext);
  console.log('user token inside home ', {userToken}, {isLoading});

  const upJson = async () => {
    // Assuming your JSON file contains an array of objects
    const data = JsonData;

    // Example: Log the first object's properties
    if (data.length > 0) {
      const firstObject = data[0];
      console.log('First Object:', firstObject);
    }

    if (data) {
      const docId = await firebaseService.getIntercityBusData(data);
      if (docId) {
        console.log('Data imported with ID: ', docId);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          upJson();
        }}
        style={styles.shutdownButton1}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={styles.shutdownButton}>
        <Image
          source={require('../../assets/images/shutdown.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
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
  icon: {
    bottom: 10, // Adjust this value to control the distance from the bottom
    right: 10, // Adjust this value to control the distance from the right
    width: 30,
    height: 30,
  },
  shutdownButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  shutdownButton1: {
    alignItems: 'center',
    bottom: 10,
    right: 10,
    color: '#000000',
  },
});
