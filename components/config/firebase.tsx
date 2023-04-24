// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: 'AIzaSyBJjrzvumvb9TmMZSrm-FmpeZI82XRO8Qg',
  // authDomain: 'bustrace-f9a82.firebaseapp.com',
  // projectId: 'bustrace-f9a82',
  // storageBucket: 'bustrace-f9a82.appspot.com',
  // messagingSenderId: '621456420737',
  // appId: '1:621456420737:web:cc128eb85888922dd84280',
  apiKey: 'AIzaSyALcJMKkPavZfvi6dOqvxfiJoTU17_m35g',
  authDomain: 'bustrace-f6f3a.firebaseapp.com',
  projectId: 'bustrace-f6f3a',
  storageBucket: 'bustrace-f6f3a.appspot.com',
  messagingSenderId: '632304619930',
  appId: '1:632304619930:web:6933dffc0268ad889aea23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
