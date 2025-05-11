import { getAuth, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, setPersistence, 
    browserLocalPersistence, 
    onAuthStateChanged,
    signOut } from "firebase/auth";
import  app  from "../firebase.js";
import page from "page";

const auth = getAuth(app);


// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     console.log('Auth persistence set to local');
//   })
//   .catch((error) => {
//     console.error('Failed to set persistence:', error);
//   });

export const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return console.log(result.user);
  
};


export const register = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  page.redirect("/")
  return result.user;
};



export function loggedUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("✅ Logged in user:", user);
      console.log("📧 Email:", user.email);
      console.log("🆔 UID:", user.uid);
    } else {
      console.log("🚫 No user is currently logged in");
    }
  });
}


export function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();  
      resolve(user);
    });
  });
}

export const logout = () => signOut(auth);

export { auth };




