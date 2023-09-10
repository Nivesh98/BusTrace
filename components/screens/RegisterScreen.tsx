import {initializeApp} from 'firebase/app';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ButtonGroup} from '../ButtonGroup';
import {CustomButton} from '../CustomButton';
import {InputField} from '../InputField';
import firebaseConfig from '../Services/firebaseConfig';
import {AuthContext} from '../context/AuthContext';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

interface RegisterScreenProps {
  navigation: any;
}

const yourAsyncFunction = async (
  name: string,
  email: string,
  DoB: string,
  userType: string,
  userUid: string,
): Promise<void> => {
  try {
    console.log('inside yourAsyncFunction', name, email, DoB, userType);
    const docRef = await addDoc(collection(db, 'users'), {
      name: name,
      email: email,
      DoB: DoB,
      userType: userType,
      userUid: userUid,
    });
    console.log('Document written with ID: ', docRef.id);
    console.log('Document written with ID: ');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  let a: string = '';
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState(new Date('2005-01-01'));
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');
  const [error, setError] = useState<string>('');

  const [userType, setUserType] = useState('');

  const isValidValue = (): boolean => {
    if (
      fullName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      dobLabel !== 'Date of Birth'
    ) {
      return true;
    }
    return false;
  };

  const updateError = (
    errorMessage: string,
    updateErrorFn: (error: string) => void,
  ) => {
    updateErrorFn(errorMessage);
    setTimeout(() => {
      updateErrorFn('');
    }, 2500);
  };

  const isValidEmail = (value: string): boolean => {
    const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regx.test(value);
  };

  const isValidForm = (): boolean => {
    if (!isValidValue()) {
      updateError('Required all fields', setError);
      return false;
    }

    if (!fullName.trim() || fullName.length < 3) {
      updateError('Invalid name!', setError);
      return false;
    }
    if (!isValidEmail(email)) {
      console.log('email vlaid ', isValidEmail(email));
      updateError('Invalid email!', setError);
      return false;
    }
    if (!password.trim() || password.length < 8) {
      updateError('Password is less than 8 characters!', setError);
      return false;
    }
    if (password !== confirmPassword) {
      updateError('Password is not matched!', setError);
      return false;
    }

    return true;
  };

  const createUser = () => {
    if (isValidForm()) {
      //const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          //const user = userCredential.user;
          //console.log(userCredential);
          const userUid = userCredential.user.uid; // Get the user's UID
          yourAsyncFunction(fullName, email, dobLabel, userType, userUid);
          login();
          Alert.alert('User Logged in sucessfully!');
          console.log('Register Successfully!');
          // ...
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage);
          console.log('Register fail!');
          // ..
        });
    }
  };
  const printNumber = (item: string) => {
    console.log(`Clicked: Item: ${item}`);
    a = item;
    setUserType(item);
    //console.log('userType', userType);
    console.log(a);
  };
  console.log(dobLabel);

  useEffect(() => {
    console.log('userType', userType);
  }, [userType]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.buttonGroup}>
          <ButtonGroup
            buttons={['Passenger', 'Driver']}
            doSomthingAfterClick={printNumber}
          />
        </View>
        <View>
          <Text style={styles.registerText}>Register</Text>
        </View>
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
        <Text style={styles.forgot_button}>Or, register with email ...</Text>
        {error ? (
          <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
        ) : (
          <Text>{null}</Text>
        )}
        <InputField
          label={'Full name'}
          icon={<Icon name="person" size={20} color="#fff" />}
          textColor={'#003f5c'}
          inputType={'Text'}
          keyboardType={'ascii-capable'}
          onChangeFunction={fullName => setFullName(fullName)}
        />
        <InputField
          label={'example@gmail.com'}
          icon={<Icon name="email" size={20} color="#fff" />}
          textColor={'#003f5c'}
          keyboardType={'email-address'}
          inputType={'Text'}
          onChangeFunction={email => setEmail(email)}
        />
        <InputField
          label={'********'}
          icon={<Icon name="lock" size={20} color="#fff" />}
          textColor={'#003f5c'}
          inputType={'Password'}
          onChangeFunction={password => setPassword(password)}
        />
        <View style={{marginBottom: 20}}>
          <InputField
            label={'********'}
            icon={<Icon name="lock" size={20} color="#fff" />}
            textColor={'#003f5c'}
            inputType={'Password'}
            onChangeFunction={confirmPassword => setConfirmPassword(password)}
          />
          <View
            style={{
              backgroundColor: '#d2691e',
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingLeft: 8,
              marginBottom: 10,
              width: '95%',
              height: 35,
              borderRadius: 30,
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="calendar-today"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
            <TouchableOpacity style={{flex: 1}} onPress={() => setOpen(true)}>
              <Text style={{color: '#003f5c'}}>{dobLabel}</Text>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            minimumDate={new Date('1950-01-01')}
            maximumDate={new Date('2005-01-01')}
            onConfirm={selectedDate => {
              setOpen(false);
              setDate(selectedDate);
              setDobLabel(selectedDate.toDateString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <CustomButton label={'Register'} onPress={() => createUser()} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.register_button}>Already registered? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{fontWeight: 'bold'}}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    marginBottom: 10,
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
});
