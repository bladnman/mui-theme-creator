import { createTheme, PaletteColor, Theme } from '@mui/material';

export function augmentThemeWithPaletteColors(
  theme: Theme,
  config: { [key: string]: string },
) {
  const colors: { [key: string]: PaletteColor } = {};
  for (const key in config) {
    colors[key] = theme.palette.augmentColor({
      color: {
        main: config[key],
      },
      name: key,
    });
  }

  return createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
      ...colors,
    },
  });
}
