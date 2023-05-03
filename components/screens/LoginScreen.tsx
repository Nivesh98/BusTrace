import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '../CustomButton';
import {InputField} from '../InputField';
import {AuthContext} from '../context/AuthContext';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyALcJMKkPavZfvi6dOqvxfiJoTU17_m35g',
  authDomain: 'bustrace-f6f3a.firebaseapp.com',
  projectId: 'bustrace-f6f3a',
  storageBucket: 'bustrace-f6f3a.appspot.com',
  messagingSenderId: '632304619930',
  appId: '1:632304619930:web:6933dffc0268ad889aea23',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const LoginScreen = ({navigation}) => {
  const {login, guestCeck} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const isValidValue = () => {
    if (email.trim()) {
      if (password.trim()) {
        return true;
      }
    }
  };

  const updateError = (error, updateErro) => {
    updateErro(error);
    setTimeout(() => {
      updateErro('');
    }, 2500);
  };

  const isValidEmail = value => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
  };

  const isValidForm = () => {
    if (!isValidValue()) {
      return updateError('Required all fields', setError);
    }
    if (!isValidEmail(email)) {
      console.log('email vlaid ', isValidEmail(email));
      return updateError('Invalid email!', setError);
    }
    if (!password.trim() || password.length < 8) {
      return updateError('Password is less than 8 characters!', setError);
    }

    return true;
  };

  const signin = () => {
    if (isValidForm()) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          // const user = userCredential.user;
          // ...
          Alert.alert('User Logged in sucessfully!');

          console.log('Login Successfully!');
          login();
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Login fail!');
          Alert.alert(errorMessage);
        });
    }
  };

  const printNumber = (item): number => {
    return 1;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.loginTextText}>Login</Text>
        </View>
        {error ? (
          <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
        ) : (
          <Text>{null}</Text>
        )}
        <InputField
          label={'Email'}
          icon={<Icon name="email" size={20} color="#fff" />}
          textColor={'#003f5c'}
          keyboardType={'email-address'}
          onChangeFunction={email => setEmail(email)}
        />
        <InputField
          label={'Password'}
          icon={<Icon name="lock" size={20} color="#fff" />}
          textColor={'#003f5c'}
          inputType={'Password'}
          onChangeFunction={password => setPassword(password)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <CustomButton
          label={'Login'}
          //navigation.navigate('Home')
          onPress={() => {
            signin();
          }}
        />

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
          onPress={() => {
            // guestCeck();
          }}>
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
