import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBo9RT80_OFXCLTT1f76kQTVEXxStmuCNg",
  authDomain: "project-manager-7ccd7.firebaseapp.com",
  projectId: "project-manager-7ccd7",
  storageBucket: "project-manager-7ccd7.appspot.com",
  messagingSenderId: "542071723066",
  appId: "1:542071723066:web:3e1962bdcd51d62df95103"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
