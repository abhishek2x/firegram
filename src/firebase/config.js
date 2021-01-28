import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBKjIYetQkughRwBLpImJ2_7dbtjjPUpYw",
  authDomain: "react-firegram.firebaseapp.com",
  databaseURL: "https://react-firegram.firebaseio.com",
  projectId: "react-firegram",
  storageBucket: "react-firegram.appspot.com",
  messagingSenderId: "237926465806",
  appId: "1:237926465806:web:5563bf96ed5c6ff336d75f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectfirestore, timestamp };
