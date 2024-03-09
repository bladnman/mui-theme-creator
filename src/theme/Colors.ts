type ColorMode = 'light' | 'dark';

interface ColorDefinitions {
  primary: string;
  dim: string;
  // Add more named colors as needed
}

const colorThemes: Record<ColorMode, ColorDefinitions> = {
  light: {
    primary: '#007bff',
    dim: '#2b527b',
    // Define light mode colors
  },
  dark: {
    primary: '#71fc02',
    dim: '#689c3f',
    // Define dark mode colors
  },
};

class Colors {
  private mode: ColorMode;

  constructor(mode: ColorMode = 'light') {
    this.mode = mode;
  }

  get(colorName: keyof ColorDefinitions): string {
    return colorThemes[this.mode][colorName];
  }

  setMode(mode: ColorMode): void {
    this.mode = mode;
  }
}
export default new Colors('light');
