import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, UserCredential, onAuthStateChanged, signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
} from "firebase/auth";

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
const auth = getAuth();


const registerFirebase = async (email: string, password: string) => { 
    try {
        const data: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(data, 'Successfully registered!');
        return true;
    } catch (error) {
        console.log(error, 'Register Failed');
        return false;
    }
};

const loginFirebase = async (email: string, password: string) => {
    try {
        const data: UserCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(data, 'Successfully logged in!');
        localStorage.setItem('user', JSON.stringify(data));
        let response = { status: true, data: data };
        return response;
    } catch (error) {
        console.log(error, 'Login Failed');
        let response = { status: false, data:error }
        return response;
    }
};

const logOutFirebase = () => {
    signOut(auth).then(() => {
        localStorage.clear();
        return true;
    });
};

const checkUserLogin = () => {
    onAuthStateChanged(auth, (user) => { 
        if (user) {
            return {
                status: true,
                data: user,
            };
        } else {
            return {
                status: false,
                data: null,
            };
        }
    });
}

export { analytics, registerFirebase, loginFirebase, logOutFirebase, checkUserLogin };