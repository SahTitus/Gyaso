import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDZi3vumA4uqFjj-AXhp26EyY3ynQcErwU",
	authDomain: "hooklearn-dcd07.firebaseapp.com",
	databaseURL: "https://hooklearn-dcd07-default-rtdb.firebaseio.com",
	projectId: "hooklearn-dcd07",
	storageBucket: "hooklearn-dcd07.appspot.com",
	messagingSenderId: "817744596984",
	appId: "1:817744596984:web:55e3b1fbaae5993b16900d",
	measurementId: "G-SP81WZ19XS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };