import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDny06uCK07lmQpgWpfUKFkaKO04rd-NE8",
    authDomain: "auth-dev-d30ee.firebaseapp.com",
    projectId: "auth-dev-d30ee",
    storageBucket: "auth-dev-d30ee.appspot.com",
    messagingSenderId: "979650882089",
    appId: "1:979650882089:web:5e3ffa2f4a08d8346e8a38"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;