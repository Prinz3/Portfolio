import React, { useState, useEffect, createContext, useContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

const ThemeControlContext = createContext({
  toggleTheme: () => {},
  increaseFont: () => {},
  decreaseFont: () => {},
});
export const useThemeControls = () => useContext(ThemeControlContext);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setMode(saved);
    else {
      setMode(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);
  const toggleTheme = () =>
    setMode((m) => (m === 'light' ? 'dark' : 'light'));

  const [fontSize, setFontSize] = useState(16);
  const increaseFont = () => setFontSize((s) => Math.min(s + 2, 24));
  const decreaseFont = () => setFontSize((s) => Math.max(s - 2, 12));

  const base = mode === 'light' ? lightTheme : darkTheme;
  const theme = { ...base, fontSize };

  return (
    <ThemeControlContext.Provider
      value={{ toggleTheme, increaseFont, decreaseFont }}
    >
      <SCThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </SCThemeProvider>
    </ThemeControlContext.Provider>
  );
}
