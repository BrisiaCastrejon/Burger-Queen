import firebase from 'firebase/app';
import 'firebase/auth';
import {config} from './key';
/*const config = {
  apiKey: "AIzaSyAzyb_HA36SmHC3txsQS4s9FCbfOvYPyMo",
  authDomain: "burger-queen-proyect.firebaseapp.com",
  databaseURL: "https://burger-queen-proyect.firebaseio.com",
  projectId: "burger-queen-proyect",
  storageBucket: "burger-queen-proyect.appspot.com",
  messagingSenderId: "304138719252"
};*/
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
  auth,
};