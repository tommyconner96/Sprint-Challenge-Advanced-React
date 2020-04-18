import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const DarkButton = () => {
  const [dark, setDark] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault()
    setDark(!dark)
  };
  return (
    <div className="dark-set">
        <button
          onClick={toggleMode}
          className={dark ? 'toggle toggled' : 'toggle'}
        >
            Dark Mode</button>
      </div>
  );
};

export default DarkButton;
