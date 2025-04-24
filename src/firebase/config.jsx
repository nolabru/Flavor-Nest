import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjhsSJwMvf7Ega8wCnKUlU3HdLqdrnaek",
  authDomain: "flavor-nest.firebaseapp.com",
  projectId: "flavor-nest",
  storageBucket: "flavor-nest.firebasestorage.app",
  messagingSenderId: "398282828231",
  appId: "1:398282828231:web:852907816a7459241511e2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
