import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCoMU6u5SXryoT9HZefTDMl_U4oZKjZ5rk",
    authDomain: "authentication-firebase-77a13.firebaseapp.com",
    projectId: "authentication-firebase-77a13",
    storageBucket: "authentication-firebase-77a13.appspot.com",
    messagingSenderId: "215213780878",
    appId: "1:215213780878:web:1c97d6e1e0308a1db27edf",
    measurementId: "G-26H8NBKYLB"
};

const app = initializeApp(firebaseConfig);
const analytics: any = getAnalytics(app);

export { analytics };