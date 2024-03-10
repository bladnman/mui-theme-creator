import React, { createContext, ReactNode, useContext, useState } from 'react';

export type StoreContextType = {
  colors: ThemePaletteColors;
  setColors: React.Dispatch<React.SetStateAction<ThemePaletteColors>>;
};
const StoreContext = createContext<StoreContextType | undefined>(undefined);

type StoreProviderProps = {
  children: ReactNode;
};
export const StoreProvider = ({ children }: StoreProviderProps) => {
  /**
   * color palette
   * arrays of 1 or 2 colors:
   *  - 2 colors: light, dark
   *  - 1 color: both colors
   */
  const [colors, setColors] = useState<ThemePaletteColors>({
    pri: ['#3c5698', '#7390dc'],
    sec: ['#7e3c98', '#b460d4'],
    fg: ['#38363e', '#c0bcc6'],
    bg: ['#eeeef1', '#26262b'],
    paper: ['#f9f9f9', '#232326'],
    appColor: ['#e4ff00', '#c1d636'],
  });
  return (
    <StoreContext.Provider
      value={{
        colors,
        setColors,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export function useStoreContext(): StoreContextType {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
}
export default StoreContext;
