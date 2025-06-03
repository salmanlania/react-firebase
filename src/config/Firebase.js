import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdJXwDLwneSJQuDLpRT9l2OiAm7TJC61E",
    authDomain: "smit-projects-59cf9.firebaseapp.com",
    projectId: "smit-projects-59cf9",
    storageBucket: "smit-projects-59cf9.firebasestorage.app",
    messagingSenderId: "585656771043",
    appId: "1:585656771043:web:2124340255db99fb2500d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const login = async (email , password) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log('user', user)
        console.log('userCredential', userCredential)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage)
        console.log({errorMessage , errorCode})
    }
}

export {
    login,
    auth
}