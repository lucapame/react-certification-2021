import React, { useState, useEffect, useContext, useCallback } from 'react';

import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const lastAuthState = storage.get('auth');
    const isAuthenticated = Boolean(lastAuthState);

    const lastUser = storage.get('userInfo');
    if (isMounted) setUser(lastUser);
    if (isMounted) setAuthenticated(isAuthenticated);

    return () => {
      isMounted = false;
    };
  }, []);

  const login = useCallback((res) => {
    setUser(res);
    setAuthenticated(true);
    storage.set('auth', true);
    storage.set('userInfo', res);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser(null);
    storage.set('auth', false);
    storage.set('userInfo', null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export { AuthContext };
export default AuthProvider;
