import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA4B3aNbsf3QsD2On-DlDLDcL9JY2feHyY",
  authDomain: "quora-de645.firebaseapp.com",
  projectId: "quora-de645",
  storageBucket: "quora-de645.appspot.com",
  messagingSenderId: "471684249988",
  appId: "1:471684249988:web:881bae214d00fcc34b45d1",
  measurementId: "G-36W57LPVJ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
