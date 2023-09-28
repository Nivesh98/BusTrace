import {FirebaseApp, initializeApp} from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  signOut as signOutFirebase,
} from 'firebase/auth';
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';

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

  async signOut() {
    try {
      await signOutFirebase(this.auth); // Call the signOut method from Firebase Auth
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

  getCurrentUserId() {
    const user = this.auth.currentUser;
    if (user) {
      return user.uid;
    } else {
      // User is not authenticated
      return null;
    }
  }
}

export default FirebaseAuthService;
