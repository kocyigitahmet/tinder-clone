import firebase, { database } from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCeUEHaGFrMqD_HFZm8eF3KQYEd1Fo8lEc",
    authDomain: "tinder-clone-7ed3b.firebaseapp.com",
    databaseURL: "https://tinder-clone-7ed3b.firebaseio.com",
    projectId: "tinder-clone-7ed3b",
    storageBucket: "tinder-clone-7ed3b.appspot.com",
    messagingSenderId: "841430393090",
    appId: "1:841430393090:web:a0911cead870633173621b",
    measurementId: "G-MRGHJ49CXT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const _database = firebaseApp.firestore();

  export default _database;
