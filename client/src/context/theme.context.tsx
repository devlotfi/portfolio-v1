import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Themes } from '../types/themes.type';
import { Constants } from '../constants';

interface ThemeContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

const initialValue: ThemeContext = {
  theme: Themes.SYSTEM,
  setTheme() {},
};

export const ThemeContext = createContext(initialValue);

const getSystemTheme = (): Themes => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return Themes.DARK;
  }
  return Themes.LIGHT;
};

const applyTheme = (theme: Themes) => {
  const element = document.getElementById('theme-provider') as HTMLElement;
  if (theme === Themes.DARK || theme === Themes.LIGHT) {
    element.dataset.theme = theme;
  } else if (theme === Themes.SYSTEM) {
    theme = getSystemTheme();
    if (theme === Themes.LIGHT || theme === Themes.DARK) {
      element.dataset.theme = theme;
    }
  }
  localStorage.setItem(Constants.THEME_STORAGE_KEY, theme);
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const initTheme = () => {
    const theme = localStorage.getItem(Constants.THEME_STORAGE_KEY);
    if (theme === Themes.SYSTEM) {
      return getSystemTheme();
    } else if (theme) {
      return theme;
    } else {
      return Themes.SYSTEM;
    }
  };

  const [theme, setTheme] = useState<Themes>(initTheme() as Themes);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const handler = () => {
      setTheme((theme) => {
        if (theme === Themes.SYSTEM) {
          applyTheme(getSystemTheme());
        }
        return theme;
      });
    };

    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    themeMediaQuery.addEventListener('change', handler);

    return () => {
      themeMediaQuery.removeEventListener('change', handler);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
