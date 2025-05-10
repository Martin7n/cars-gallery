import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return console.log(result.user);
};


export const register = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user;
};
