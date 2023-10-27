// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsuWQ0f_NvsVRQ07FdvhiZqL7f9FWbiI0",
  authDomain: "vuetify-5dea0.firebaseapp.com",
  projectId: "vuetify-5dea0",
  storageBucket: "vuetify-5dea0.appspot.com",
  messagingSenderId: "276835695748",
  appId: "1:276835695748:web:48fe6c855da4d0e68596d1",
  measurementId: "G-MSKYLYD3T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
