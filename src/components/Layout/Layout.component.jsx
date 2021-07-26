import React, { useState } from 'react';
import NavBar from '../Common/navbar.component';

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="App" data-theme={darkMode ? 'dark' : 'light'}>
      <NavBar darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />
      {children}
    </main>
  );
}

export default Layout;
