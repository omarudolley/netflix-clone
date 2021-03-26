


const firebaseConfig = {
    apiKey: "AIzaSyBX_JADiI7tiF3JV9Lk7GVITgAkOoOVEGs",
    authDomain: "my-netflix-clone-e4d5d.firebaseapp.com",
    projectId: "my-netflix-clone-e4d5d",
    storageBucket: "my-netflix-clone-e4d5d.appspot.com",
    messagingSenderId: "187658292806",
    appId: "1:187658292806:web:f73b2fe9abd12e2c1d4447"
  };

  const firebase = window.firebase.initializeApp(firebaseConfig);
  const {FieldValue} = window.firebase.firestore();



  export {firebase,FieldValue}