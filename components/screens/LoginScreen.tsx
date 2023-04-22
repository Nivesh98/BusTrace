import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '../CustomButton';
import {InputField} from '../InputField';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const printNumber = (item): number => {
    return 1;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <View style={styles.buttonGroup}>
        <ButtonGroup
          buttons={['Passenger', 'Driver']}
          doSomthingAfterClick={printNumber}
        />
      </View> */}
        {/* <Image style={styles.image} source={require('../assets/bus.png')} /> */}
        {/* <View style={styles.inputViewEmail}>
        <Icon name="email" size={20} color="#fff" />
        <TextInput
          style={styles.TextInputEmail}
          keyboardType="email-address"
          placeholder="Email"
          textAlign="left"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputViewPassword}>
        <Icon name="lock" size={20} color="#fff" />
        <TextInput
          style={styles.TextInputPassword}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View> */}
        <View>
          <Text style={styles.loginTextText}>Login</Text>
        </View>
        <InputField
          label={'Email'}
          icon={<Icon name="email" size={20} color="#fff" />}
          textColor={'#003f5c'}
          keyboardType={'email-address'}
          onChangeFunction={email => setFullName(email)}
        />
        <InputField
          label={'Password'}
          icon={<Icon name="lock" size={20} color="#fff" />}
          textColor={'#003f5c'}
          inputType={'Password'}
          onChangeFunction={password => setFullName(password)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <CustomButton
          label={'Login'}
          onPress={() => navigation.navigate('Home')}
        />
        {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}
        <Text style={styles.forgot_button}>Or, login with ...</Text>
        <View style={styles.loginLogo}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/images/facebook.png')}
              style={styles.facebookLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.googleLogo}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.register_button}>New to the app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontWeight: 'bold'}}>Register Here</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.guestTouchable}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.guestText}>Let's as a Guest.</Text>
          <Icon name="arrow-right" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  inputViewEmail: {
    backgroundColor: '#d2691e',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 8,
    marginBottom: 20,
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
  loginTextText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
  },
});
