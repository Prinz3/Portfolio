import React from 'react';
import { useThemeControls } from '../ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { toggleTheme, mode } = useThemeControls();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {mode === 'light' ? <Moon /> : <Sun />} 
    </button>
  );
}
