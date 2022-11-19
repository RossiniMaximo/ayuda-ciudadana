import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2rnV7fF3DdWWx7v-zO6uKfpquv5UtpLA",
  authDomain: "ayuda-ciudadana-drawer.firebaseapp.com",
  projectId: "ayuda-ciudadana-drawer",
  storageBucket: "ayuda-ciudadana-drawer.appspot.com",
  messagingSenderId: "337319437260",
  appId: "1:337319437260:web:3e6c24b5817f25f18b3369",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
