import { createTheme, ThemeOptions } from '@mui/material';
import chroma from 'chroma-js';
import { augmentThemeWithPaletteColors } from '@theme/theme-utils.ts';

interface CustomThemeOptions extends ThemeOptions {
  // Custom properties have already been handled by augmenting MUI's types
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    dim?: string;
    status?: {
      danger?: string;
    };

    app100?: string;
    app90?: string;
    app75?: string;
    app50?: string;
    app25?: string;
    app10?: string;

    background100?: string;
    background90?: string;
    background75?: string;
    background50?: string;
    background25?: string;
    background10?: string;

    foreground100?: string;
    foreground90?: string;
    foreground75?: string;
    foreground50?: string;
    foreground25?: string;
    foreground10?: string;
  }
}

const DARK = '#38363e';
const LIGHT = '#c0bcc6';
const themeColors = (mode: 'light' | 'dark') => ({
  dim: mode === 'dark' ? '#689c3f' : '#2b527b',
  halt: mode === 'dark' ? '#e93e86' : '#9d2658',

  background: mode === 'dark' ? DARK : LIGHT,
  foreground: mode === 'dark' ? LIGHT : DARK,
  appColor: mode === 'dark' ? '#d6a236' : '#d6a236',
});
export const createDynamicThemeHOLD = (mode: 'light' | 'dark') => {
  // mode = 'light';

  // Define a utility to adjust color based on mode
  const baseColors = themeColors(mode);
  const invertLuminance = (baseColor: string, percentage: number): string => {
    if (percentage === 100) return baseColor;

    // Decide to lighten or darken based on the base color's luminance
    return chroma(baseColor).get('hsl.l') < 0.5
      ? removeDarkness(baseColor, percentage)
      : removeLightness(baseColor, percentage);
  };

  const removeDarkness = (baseColor: string, percentage: number): string => {
    const factorDesired = percentage / 100;
    const currentValue = chroma(baseColor).get('hsl.l');
    const availableValue = 1 - currentValue;
    const targetValue = Math.min(
      1.0,
      Math.max(0, currentValue + availableValue * factorDesired),
    );
    const chromaColor = chroma(baseColor);
    const adjustedColor = chromaColor.set('hsl.l', targetValue);
    return adjustedColor.hex();
  };

  const removeLightness = (baseColor: string, percentage: number): string => {
    const factorDesired = percentage / 100;
    const availableValue = chroma(baseColor).get('hsl.l');
    const targetValue = Math.min(
      1.0,
      Math.max(0, availableValue - availableValue * factorDesired),
    );
    const chromaColor = chroma(baseColor);
    const adjustedColor = chromaColor.set('hsl.l', targetValue);
    return adjustedColor.hex();
  };

  const themeOptions: CustomThemeOptions = {
    palette: {
      mode: mode,

      primary: {
        main: '#8978b7',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: DARK,
        paper: '#28252a',
      },

      background100: baseColors.background,
      background90: invertLuminance(baseColors.background, 10),
      background75: invertLuminance(baseColors.background, 25),
      background50: invertLuminance(baseColors.background, 50),
      background25: invertLuminance(baseColors.background, 75),
      background10: invertLuminance(baseColors.background, 90),

      foreground100: baseColors.foreground,
      foreground90: invertLuminance(baseColors.foreground, 10),
      foreground75: invertLuminance(baseColors.foreground, 25),
      foreground50: invertLuminance(baseColors.foreground, 50),
      foreground25: invertLuminance(baseColors.foreground, 75),
      foreground10: invertLuminance(baseColors.foreground, 90),
    },

    // Define components customizations if needed
  };

  const values = [100, 90, 75, 50, 25, 10];
  values.forEach((value) => {
    const key = `app${value}`;
    // @ts-expect-error - We are adding a new property to the palette
    themeOptions.palette[key] = invertLuminance(baseColors.appColor, value);
  });

  const finalColors: { [key: string]: string } = {
    bg: mode === 'dark' ? DARK : LIGHT,
    fg: mode === 'dark' ? LIGHT : DARK,
    appColor: mode === 'dark' ? '#c1d636' : '#c1d636',
    dim: baseColors.dim,
    halt: baseColors.halt,
  };
  let theme = createTheme(themeOptions);
  theme = augmentThemeWithPaletteColors(theme, finalColors);
  return theme;
};
