import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClprg0-MwIUMNerC_IHsLNZqJx7N9X878",
  authDomain: "course-space-964bb.firebaseapp.com",
  databaseURL: "https://course-space-964bb.firebaseio.com",
  projectId: "course-space-964bb",
  storageBucket: "course-space-964bb.appspot.com",
  messagingSenderId: "480535377866",
  appId: "1:480535377866:web:6728ed3202d3b9d7ab4133",
  measurementId: "G-Q97K5740P8"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export const firestore = firebase.firestore();

export default firebase;
