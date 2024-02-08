import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'App dark' : 'App light'}>
      

      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
