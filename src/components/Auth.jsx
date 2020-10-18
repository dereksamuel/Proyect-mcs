import React, { useState, useEffect } from 'react';
import firebase from '../helpers/firebase';

import Loading from './loading/index';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().languageCode = 'es';
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Loading />
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}
