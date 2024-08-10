//Корневой компонент
import "./styles/index.scss"
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";






export function App() {
    const {theme} = useTheme();
    return (
    <div className={classNames('app', {}, [theme])}> 
        <NavBar />
        <AppRouter/>
       
    </div>
    )
}