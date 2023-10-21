/* eslint-disable react-hooks/rules-of-hooks */
import {FirebaseApp, initializeApp} from 'firebase/app';
import {
  Auth,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  signOut as signOutFirebase,
} from 'firebase/auth';
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import {useEffect} from 'react';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

class FirebaseAuthService {
  private app: FirebaseApp;
  private auth: Auth;
  private db: Firestore;
  // private persistance: Persistence;

  constructor(config: FirebaseConfig) {
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.initAuthStateListener();
  }

  async initAuthStateListener() {
    onAuthStateChanged(this.auth, (user: User | null) => {
      if (user) {
        console.log('User is logged in:', user.uid);
        // User is logged in, you can store user information or take action here
      } else {
        console.log('No user is logged in');
        // No user is logged in
      }
    });
  }

  async checkUser() {
    useEffect(() => {
      onAuthStateChanged(this.auth, data => {
        console.log(
          'dataffffffffffffffffffffffffffffffffffffffffffffffffffff',
          data,
        );
      });
    }, []);
  }

  /************************************Register User****************************************/
  async registerUser(
    name: string,
    email: string,
    password: string,
    dob: string,
    userType: string,
  ) {
    try {
      // Create a user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Add user data to Firestore
      addDoc(collection(this.db, 'users'), {
        name,
        email,
        dob,
        userType,
        userUid: user.uid,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
  /*****************************************************************************************/

  /******************************User SignIn************************************************/
  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPasswordFirebase(
        this.auth,
        email,
        password,
      );

      const user = userCredential.user;

      console.log('User signed in with UID:', user.uid);
      return user;
    } catch (error) {
      throw error;
    }
  }
  /******************************************************************************************/

  async signOut() {
    try {
      console.log('this.auth', this.auth.currentUser?.uid);
      await signOutFirebase(this.auth);
      console.log('FirebaseAuthService user signout'); // Call the signOut method from Firebase Auth
    } catch (error) {
      throw error;
    }
  }

  /***************************************Get Data******************************************************/

  async getUserData() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'users'));
      const userData: {id: string; data: DocumentData}[] = [];

      querySnapshot.forEach(doc => {
        userData.push({id: doc.id, data: doc.data()});
      });

      return userData;
    } catch (error) {
      throw error;
    }
  }

  /*****************************************************************************************************/

  async getIntercityBusData(data) {
    try {
      const busRouteCollection = collection(this.db, 'IntercityBusRoute');
      for (let i = 0; i < data.length; i++) {
        // Create a reference with an incremental document ID (starting from 1)
        const busRouteDoc = doc(busRouteCollection, (i + 1).toString());

        // Add data to the Firestore document
        await setDoc(busRouteDoc, data[i]);
      }
      console.log('Data added to Firestore successfully.');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  getCurrentUserId() {
    const user = this.auth.currentUser;
    if (user) {
      console.log('FirebaseAuthService user.uid', user.uid);
      return user.uid;
    } else {
      // User is not authenticated
      console.log('FirebaseAuthService user.uid nullllllllllllllll');
      return null;
    }
  }

  getCurrentUser() {
    const user = this.auth.currentUser;
    if (user) {
      console.log('FirebaseAuthService user.uid', user);
      return user;
    } else {
      // User is not authenticated
      console.log('FirebaseAuthService user.uid nullllllllllllllll');
      return null;
    }
  }
}

export default FirebaseAuthService;
