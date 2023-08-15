import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../context/AuthContext';

export const HomeScreenDriver = () => {
  const {logout} = useContext(AuthContext);
  const {userToken, isLoading} = useContext(AuthContext);
  console.log('user token inside home ', {userToken}, {isLoading});

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.menu}>
        <View>
          <Icon name="menu" size={24} color={'#fff'} />
        </View>
        <View style={styles.homeScreen}>
          <Text style={styles.homeScreenText}>Home</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}>
        <Text style={styles.signOutBtn}>SignOut</Text>
      </TouchableOpacity>
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
});
