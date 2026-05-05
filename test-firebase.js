import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDixw_n4JtFLpYBe5c7P-JSEvhhQ6xOfSU",
  authDomain: "web-developer-6f37b.firebaseapp.com",
  projectId: "web-developer-6f37b",
  storageBucket: "web-developer-6f37b.firebasestorage.app",
  messagingSenderId: "519195472057",
  appId: "1:519195472057:web:e897ba28269d67be5f2b68",
  measurementId: "G-HC6KT365ZZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  try {
    console.log("Testing write...");
    const docRef = await addDoc(collection(db, "reviews"), {
        name: "Test User",
        business: "Test Business",
        rating: 5,
        feedback: "This is a test feedback",
        photo: "",
        date: new Date().toISOString()
    });
    console.log("Write success with ID: ", docRef.id);
  } catch (e) {
    console.error("Write error:", e.message);
  }

  try {
    console.log("Testing read...");
    const querySnapshot = await getDocs(collection(db, "reviews"));
    console.log("Read success, docs count:", querySnapshot.size);
  } catch (e) {
    console.error("Read error:", e.message);
  }
}

test();
