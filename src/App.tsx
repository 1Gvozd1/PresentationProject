//Корневой компонент
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss"
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



export function App() {
    const {theme, toggleTheme} = useTheme();
    return (
    <div className={classNames('app', {}, [theme])}> 
    <button onClick={toggleTheme}>Сменить тему</button>
        <Link to='/'>Главная</Link> {/* ссылки для перехода между путями*/}
        <Link to='/about'>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}> {/* показать крутилку до тех пор пока компонент не подгрузился */}
            <Routes> {/* все роуты что есть в нашем приложении нужно обернуть в Routes */}
                <Route path='/' element={<MainPageAsync/>}/> {/* path - путь, element - компонент который хранится/отрисовывается по данному пути */}
                <Route path='/about' element={<AboutPageAsync />}/> {/* Async для того чтобы не грузить весь бандл */}
            </Routes>
        </Suspense>
    </div>
    )
}