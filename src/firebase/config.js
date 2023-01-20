import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDkAG6NSc58CXNxXoq6mWgWnR01tqtKL78",
  authDomain: "olx-clone-29857.firebaseapp.com",
  projectId: "olx-clone-29857",
  storageBucket: "olx-clone-29857.appspot.com",
  messagingSenderId: "416383519084",
  appId: "1:416383519084:web:1c1c9b026e998128ec8b49"
};

  export default firebase.initializeApp(firebaseConfig);
