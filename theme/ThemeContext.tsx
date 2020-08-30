// Inspired from https://kentcdodds.com/blog/how-to-use-react-context-effectively
import { Theme } from './index';
import React, { useState } from 'react';

type Action = (theme: Theme) => void;

const ThemeStateContext = React.createContext<Theme | undefined>(undefined);
const ThemeDispatchContext = React.createContext<Action | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>('purple');

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState() {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
}

function useThemeDispatch() {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeState, useThemeDispatch };
