import {StatusBar} from 'react-native/Libraries/Components/StatusBar/StatusBar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ButtonGroup} from '../ButtonGroup';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const printNumber = (item): number => {
    return 1;
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <ButtonGroup
          buttons={['Passenger', 'Driver']}
          doSomthingAfterClick={printNumber}
        />
      </View>
      <Image style={styles.image} source={require('../assests/bus.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          textAlign="left"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.register_button}>Not Login? Register Here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.guestTouchable}>
        <Text style={styles.guestText}>Let's as a Guest.</Text>
        <Icon name="comments" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  image: {
    width: 75,
    height: 75,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: '#d2691e',
    borderRadius: 30,
    width: '95%',
    height: 35,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
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
    marginBottom: 20,
    alignItems: 'center',
  },
  register_button: {
    height: 30,
    marginBottom: 90,
  },
  guestTouchable: {
    backgroundColor: '#800000',
    padding: 7,
    width: '95%',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  guestText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
