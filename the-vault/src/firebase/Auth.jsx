//firebase gives us access to various methods , we want to expose thodse methods with a custum hook and get it available in all over the app

//This file is a setup for Firebase authentication in a React app using a custom hook. The idea behind it is to create an
// authentication system that can be accessed throughout the app easily using a context provider

// Import the functions you need from the SDKs you need

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4smNQqE5hunXEr8Ar3oaOAb_R46QpE8",
  authDomain: "real-trust-f9b61.firebaseapp.com",
  projectId: "real-trust-f9b61",
  storageBucket: "real-trust-f9b61.firebasestorage.app",
  messagingSenderId: "127950695292",
  appId: "1:127950695292:web:d1b06790e58b6b585f52f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const AuthContext = createContext(null);

// we will create a provider in order to order to use the AuthContext value
//The AuthProvider is a component that wraps the entire application (or a portion of it) and makes
// the authentication context available to any child components inside it.
const AuthProvider = ({ children }) => {
  const authValue = useProvideAuth();
  return (
    <AuthContext.Provider value={authValue}>
      {/* auth is authentication object  */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// custom hook for adding user to a state
// we have all the functionalities coming from the firebase like sign up login in log out , we will use the above context to prodive the values to custo hook
function useProvideAuth() {
  const [user, setUser] = useState();
  const signUp = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      updateProfile(user, { displayName });
      setUser(user);
      return user;
    });

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      setUser(user);
      return user;
    });

  const handleSignOut = () => signOut(auth).then(() => setUser(null));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => unsubscribe;
  }, []);

  return { signIn, signUp, signOut: handleSignOut, user };
}

export default AuthProvider;
