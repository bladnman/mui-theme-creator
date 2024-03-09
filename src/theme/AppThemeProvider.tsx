import React, { useState, useMemo, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createDynamicTheme } from '@theme/theme.ts';

// If you have custom theme options defined elsewhere, import and use them here
// Otherwise, define the theme inside this component or import a base theme configuration

interface ThemeProps {
  colorMode?: 'light' | 'dark'; // Optional prop to allow the parent to control the theme mode
  children?: ReactNode; // Allows this component to accept children
}

const AppThemeProvider: React.FC<ThemeProps> = ({ colorMode, children }) => {
  const [mode /*, setMode*/] = useState<'light' | 'dark'>(colorMode ?? 'light');

  const theme = useMemo(() => createDynamicTheme(mode), [mode]);
  // const toggleThemeMode = () => {
  //   setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  // };

  // Ensure that toggleThemeMode is accessible by your components, possibly via context or props
  console.log(`[🐽](AppThemeProvider) theme`, theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;

// LightTheme helper component
export const LightTheme: React.FC<ThemeProps> = ({ children }) => {
  return <AppThemeProvider colorMode="light">{children}</AppThemeProvider>;
};

// DarkTheme helper component
export const DarkTheme: React.FC<ThemeProps> = ({ children }) => {
  return <AppThemeProvider colorMode="dark">{children}</AppThemeProvider>;
};
