import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAJrbvVTPIVjGBded5wxQFV6tcw3u9siPE",
  authDomain: "iride-byuirides.firebaseapp.com",
  projectId: "iride-byuirides",
  storageBucket: "iride-byuirides.appspot.com",
  messagingSenderId: "271812847135",
  appId: "1:271812847135:web:6469f2845c2e30ca37d72a",
  measurementId: "G-LJCZWPC7JS"
};

 if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
 }
 export {firebase};