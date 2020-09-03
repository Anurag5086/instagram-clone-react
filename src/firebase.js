import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyCCgwVYKAmIbMGFBZWYnHsViNuj4-pFE78",
    authDomain: "instagram-clone-react-aa0a1.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-aa0a1.firebaseio.com",
    projectId: "instagram-clone-react-aa0a1",
    storageBucket: "instagram-clone-react-aa0a1.appspot.com",
    messagingSenderId: "882055135018",
    appId: "1:882055135018:web:58956dc1cc5a55722d6853",
    measurementId: "G-V2G56X8HVP"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
