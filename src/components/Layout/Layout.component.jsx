import React, { useContext, useEffect, useState } from 'react';
import { SET_THEME } from '../../utils/action-types';
import { Context } from '../../utils/store';

import NavBar from '../Common/Navbar/navbar.component';

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    dispatch({ type: SET_THEME, payload: theme });
  }, [darkMode, dispatch]);

  return (
    <main className="App" data-theme={state.theme}>
      <NavBar darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />
      {children}
    </main>
  );
}

export default Layout;
