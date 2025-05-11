import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

import { getAuth, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, setPersistence, 
    browserLocalPersistence, 
    onAuthStateChanged,
    signOut } from "firebase/auth";
// import { getDatabase } from 'firebase/database';
import page from "page";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "asphalt-gallery.firebasestorage.app",
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export const storage = getStorage(app);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Auth persistence set to local');
    page.redirect(location.pathname);
  })
  .catch((error) => {
    console.error('Failed to set persistence:', error);
  });


export default  app;