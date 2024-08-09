import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT // приводим localStorage.getItem(LOCAL_STORAGE_THEME_KEY) (строку) к типу данных Theme 

export const ThemeProvider: FC = ({children}) => { //провайдер для нашей темы
    const [theme, setTheme] = useState<Theme>(defaultTheme); // передаем тему и функцию изменения темы

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme
    }), [theme]) // чтобы при перерендере компонента заново не создавать объект

    return (
        <ThemeContext.Provider value = {defaultProps}> {/* провайдер нашего контекста */}
            {children}
        </ThemeContext.Provider>
    )
}