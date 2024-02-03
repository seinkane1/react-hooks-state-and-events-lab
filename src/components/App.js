import React, {useState} from "react";

import './App.css'; 


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default App
