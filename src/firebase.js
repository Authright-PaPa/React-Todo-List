// userId: 9gQMToJUBLW7R
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAlxMDTglke99vchIWpimkDd6bAFTdgLLM",
    authDomain: "todolist-f18b7.firebaseapp.com",
    databaseURL: "https://todolist-f18b7.firebaseio.com",
    projectId: "todolist-f18b7",
    storageBucket: "todolist-f18b7.appspot.com",
    messagingSenderId: "647372487034",
    appId: "1:647372487034:web:08ad41a33b9f69f9f7fec3",
});

export { firebaseConfig as firebase }; 