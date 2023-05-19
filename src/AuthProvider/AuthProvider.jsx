/** @format */

import React, { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContest = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  //create user
  const createUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { user, createUser };

  return (
    <AuthContest.Provider value={userInfo}>{children}</AuthContest.Provider>
  );
};

export default AuthProvider;
