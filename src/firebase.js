// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_VzYkHVFzkeLAWk4aR-E8jWQQxdX0VnU",
    authDomain: "backup-account-90c2c.firebaseapp.com",
    projectId: "backup-account-90c2c",
    storageBucket: "backup-account-90c2c.firebasestorage.app",
    messagingSenderId: "968198418422",
    appId: "1:968198418422:web:ab5ba79962a47c2365a1d7",
    measurementId: "G-VPV1DCGS2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage, firebaseConfig };