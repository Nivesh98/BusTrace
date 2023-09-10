import {FirebaseApp, initializeApp} from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
} from 'firebase/auth';
import {Firestore, addDoc, collection, getFirestore} from 'firebase/firestore';

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

  constructor(config: FirebaseConfig) {
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
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
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
  /******************************************************************************************/

  // Add more authentication methods or Firebase services as needed

  // Example:
  // async signOut() {
  //   await signOut(this.auth);
  // }
}

export default FirebaseAuthService;
