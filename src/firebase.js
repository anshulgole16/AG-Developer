import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDixw_n4JtFLpYBe5c7P-JSEvhhQ6xOfSU",
  authDomain: "web-developer-6f37b.firebaseapp.com",
  projectId: "web-developer-6f37b",
  storageBucket: "web-developer-6f37b.firebasestorage.app",
  messagingSenderId: "519195472057",
  appId: "1:519195472057:web:e897ba28269d67be5f2b68",
  measurementId: "G-HC6KT365ZZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
