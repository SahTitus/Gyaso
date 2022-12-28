import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO3A0dmqcuqtoGKbCIpnH3BRuYO_NiJf8",
  authDomain: "healthtage-227a4.firebaseapp.com",
  projectId: "healthtage-227a4",
  storageBucket: "healthtage-227a4.appspot.com",
  messagingSenderId: "388033242193",
  appId: "1:388033242193:web:3854c0b53f689aac71c470",
  measurementId: "G-F4EHWYP548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };