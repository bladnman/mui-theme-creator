import { createTheme } from '@mui/material';
import { augmentThemeWithPaletteColors } from '@theme/theme-utils.ts';

export const createDynamicTheme = (mode: 'light' | 'dark') => {
  const themeColors = {
    pri: '#8978b7',
    sec: '#f50057',
    fg: mode === 'dark' ? '#c0bcc6' : '#38363e',
    bg: mode === 'dark' ? '#38363e' : '#eeeef1',
    paper: mode === 'dark' ? '#1c1926' : '#f9f9f9',
    appColor: mode === 'dark' ? '#c1d636' : '#e4ff00',
  };

  let theme = createTheme({
    palette: {
      mode: mode,

      primary: {
        main: themeColors.pri,
      },
      secondary: {
        main: themeColors.sec,
      },
      background: {
        default: themeColors.bg,
        paper: themeColors.paper,
      },
      text: {
        primary: themeColors.fg,
      },
    },
  });
  theme = augmentThemeWithPaletteColors(theme, themeColors);
  return theme;
};
