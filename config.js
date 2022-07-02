import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAvAXLrGWhdjQ-1rCA6Up4HCttfuDXt_Is",
    authDomain: "pro-c78-e-ride-stage-4.firebaseapp.com",
    projectId: "pro-c78-e-ride-stage-4",
    storageBucket: "pro-c78-e-ride-stage-4.appspot.com",
    messagingSenderId: "283629721465",
    appId: "1:283629721465:web:0a806ef675f0e8c273c1a8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
