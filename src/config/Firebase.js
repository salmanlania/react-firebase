import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdJXwDLwneSJQuDLpRT9l2OiAm7TJC61E",
    authDomain: "smit-projects-59cf9.firebaseapp.com",
    projectId: "smit-projects-59cf9",
    storageBucket: "smit-projects-59cf9.firebasestorage.app",
    messagingSenderId: "585656771043",
    appId: "1:585656771043:web:2124340255db99fb2500d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (email, password, firstName, lastName) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        const data = await setDoc(doc(db, "blogUsers", user.uid), {
            first_name: firstName,
            last_name: lastName,
            email: email,
            createdAt: new Date()
        });
        console.log('data', data)
        console.log('user', user)
        console.log('userCredential', userCredential)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        console.log({ errorMessage, errorCode })
    }
}

const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log('user', user)
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        console.log({ errorMessage, errorCode })
    }
}

export {
    signup,
    login,
    auth,
}