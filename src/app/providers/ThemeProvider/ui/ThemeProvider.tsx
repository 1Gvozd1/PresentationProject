import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT; // приводим localStorage.getItem(LOCAL_STORAGE_THEME_KEY) (строку) к типу данных Theme

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => { // провайдер для нашей темы
    const {
        initialTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme); // передаем тему и функцию изменения темы

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]); // чтобы при перерендере компонента заново не создавать объект

    return (
        <ThemeContext.Provider value={defaultProps}>
            {' '}
            {/* провайдер нашего контекста */}
            {children}
        </ThemeContext.Provider>
    );
};
