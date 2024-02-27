import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAX6CyPDZegI4A2KJ8T_qm-gFq7GF9KX7c",
  authDomain: "instagram-clone-33ae4.firebaseapp.com",
  projectId: "instagram-clone-33ae4",
  storageBucket: "instagram-clone-33ae4.appspot.com",
  messagingSenderId: "269320097276",
  appId: "1:269320097276:web:179fdb6500e18662ffb679",
  measurementId: "G-5TJ32G26JH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

