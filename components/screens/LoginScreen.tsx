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
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#d2691e',
    borderRadius: 30,
    width: '95%',
    height: 45,
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
    marginBottom: 30,
  },
  loginBtn: {
    width: '95%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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
    marginBottom: 10,
  },
});

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//     justifyContent: 'center',
//     //backgroundColor: 'yellow',
//   },
// });

// <View style={styles.container}>
{
  /* <ButtonGroup
        buttons={['Passenger', 'Driver']}
        doSomthingAfterClick={printNumber}
      /> */
}
//   <Image style={styles.image} source={require('./assets/log2.png')} />
//   <StatusBar style="auto" />
//   <View style={styles.inputView}>
//     <TextInput
//       style={styles.TextInput}
//       placeholder="Email."
//       placeholderTextColor="#003f5c"
//       onChangeText={email => setEmail(email)}
//     />
//   </View>
// <View style={styles.inputView}>
//   <TextInput
//     style={styles.TextInput}
//     placeholder="Password."
//     placeholderTextColor="#003f5c"
//     secureTextEntry={true}
//     onChangeText={password => setPassword(password)}
//   />
// </View>
// <TouchableOpacity>
//   <Text style={styles.forgot_button}>Forgot Password?</Text>
// </TouchableOpacity>
// <TouchableOpacity style={styles.loginBtn}>
//   <Text style={styles.loginText}>LOGIN</Text>
// </TouchableOpacity>
// </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     marginBottom: 40,
//   },
//   inputView: {
//     backgroundColor: '#FFC0CB',
//     borderRadius: 30,
//     width: '70%',
//     height: 45,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: '80%',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     backgroundColor: '#FF1493',
//   },
// });
