// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDagOgaKdqUu9yzY-PUHFLeDy6FOoeCKFw",
  authDomain: "maritimeflagapp-starters.firebaseapp.com",
  projectId: "maritimeflagapp-starters",
  storageBucket: "maritimeflagapp-starters.appspot.com",
  messagingSenderId: "560948109223",
  appId: "1:560948109223:web:2e3218b34144182b98e082",
  measurementId: "G-FFF77MDFKV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);