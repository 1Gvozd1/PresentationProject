//Корневой компонент
import "./styles/index.scss"
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";






export function App() {
    const {theme, toggleTheme} = useTheme();
    return (
    <div className={classNames('app', {}, [theme])}> 
    <button onClick={toggleTheme}>Сменить тему</button>
        <Link to='/'>Главная</Link> {/* ссылки для перехода между путями*/}
        <Link to='/about'>О сайте</Link>
        <AppRouter/>
    </div>
    )
}