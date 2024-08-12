// контекст для нашей темы
import { createContext } from 'react';

export enum Theme { // enum наших тем
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({}); // в качестве value в ThemeContext.Provider можно будет передать только ThemeContextProps

export const LOCAL_STORAGE_THEME_KEY = 'theme'; // ключ в localStorage для нашей темы
