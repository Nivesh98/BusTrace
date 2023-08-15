import Geolocation from '@react-native-community/geolocation';
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../context/AuthContext';

export const HomeScreen: React.FC = () => {
  const {logout} = useContext(AuthContext);
  const {userToken, isLoading} = useContext(AuthContext);
  console.log('user token inside home ', {userToken}, {isLoading});

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentDeltas, setCurrentDeltas] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    getCurrentLocation();
    const interval = setInterval(() => {
      getCurrentLocation();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({
          latitude,
          longitude,
        });
      },
      error => console.log('Error getting location:', error),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const onRegionChange = (region: any) => {
    setCurrentDeltas({
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.menu}>
          <View>
            <Icon name="menu" size={24} color={'#fff'} />
          </View>
          <View style={styles.homeScreen}>
            <Text style={styles.homeScreenText}>Home</Text>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              logout();
            }}
            style={styles.shutdownButton}>
            <Image
              source={require('../assets/images/shutdown.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.containermap}>
        <MapView
          style={styles.map}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            ...currentDeltas,
          }}
          onRegionChange={onRegionChange}>
          <Marker
            coordinate={currentLocation}
            title="Current Location"
            description="here"
          />
        </MapView>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 5,
  },
  homeScreenText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 5,
  },
  image: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  inputViewEmail: {
    backgroundColor: '#d2691e',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 8,
    marginBottom: 4,
    width: '95%',
    height: 35,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputViewPassword: {
    backgroundColor: '#d2691e',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 8,
    marginBottom: 4,
    width: '95%',
    height: 35,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  TextInputEmail: {
    height: 50,
    flex: 1,
  },
  TextInputPassword: {
    height: 50,
    flex: 1,
  },
  forgot_button: {
    height: 30,
  },
  loginBtn: {
    width: '85%',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800000',
    marginBottom: 10,
  },
  loginText: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonGroup: {
    flex: 1,
    alignItems: 'center',
  },
  register_button: {
    height: 30,
    marginBottom: 40,
  },
  guestTouchable: {
    backgroundColor: '#800000',
    padding: 5,
    width: '95%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  guestText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-Italic',
  },
  loginLogo: {
    flexDirection: 'row',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '95%',
    justifyContent: 'center',
  },
  facebookLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
  registerText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
  },
  menu: {
    flex: 1,
    backgroundColor: '#dc143c',
    padding: 5,
    flexDirection: 'row',
  },
  signOutBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
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
  containermap: {
    flex: 1,
  },
});
