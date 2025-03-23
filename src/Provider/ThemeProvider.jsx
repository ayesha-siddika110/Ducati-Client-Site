import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark"; // Get theme from localStorage
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  const theme = {
    color: {
      primary: '#00A651',
      secondary: '#F5F5F5',
      third: '#F7F7F7',
      darkbg: '#161616',
      

    },
    fontSize: {
      small: '12px',
      medium: '14px',
      large: '36px',
    },
    // darkMode,
    // toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;