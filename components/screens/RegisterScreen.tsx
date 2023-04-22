import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {ButtonGroup} from '../ButtonGroup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {InputField} from '../InputField';
import {CustomButton} from '../CustomButton';
import DatePicker from 'react-native-date-picker';

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const printNumber = (item): number => {
    return 1;
  };
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
        <InputField
          label={'Full name'}
          icon={<Icon name="person" size={20} color="#fff" />}
          textColor={'#003f5c'}
          keyboardType={'ascii-capable'}
          onChangeFunction={fullName => setFullName(fullName)}
        />
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
        <View style={{marginBottom: 20}}>
          <InputField
            label={'Confirm Password'}
            icon={<Icon name="lock" size={20} color="#fff" />}
            textColor={'#003f5c'}
            inputType={'Password'}
            onChangeFunction={confirmPassword => setConfirmPassword(password)}
          />
          {/* <InputField
            label={'Date of Birth'}
            icon={<Icon name="calendar-today" size={20} color="#fff" />}
            textColor={'#003f5c'}
            onChangeFunction={dateOfBirth => setDateOfBirth(dateOfBirth)}
          /> */}
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
              <Text style={{color: '#003f5c'}}>Date of Birth</Text>
            </TouchableOpacity>
          </View>
          
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

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
        <CustomButton
          label={'Register'}
          onPress={() => navigation.navigate('Home')}
        />
        {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity> */}
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
