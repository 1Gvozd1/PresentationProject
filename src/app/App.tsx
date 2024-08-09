//Корневой компонент
import { Routes, Route } from "react-router-dom";
import "./styles/index.scss"
import { Link } from "react-router-dom";

import { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";





export function App() {
    const {theme, toggleTheme} = useTheme();
    return (
    <div className={classNames('app', {}, [theme])}> 
    <button onClick={toggleTheme}>Сменить тему</button>
        <Link to='/'>Главная</Link> {/* ссылки для перехода между путями*/}
        <Link to='/about'>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}> {/* показать крутилку до тех пор пока компонент не подгрузился */}
            <Routes> {/* все роуты что есть в нашем приложении нужно обернуть в Routes */}
                <Route path='/' element={<MainPage/>}/> {/* path - путь, element - компонент который хранится/отрисовывается по данному пути */}
                <Route path='/about' element={<AboutPage/>}/> {/* Async для того чтобы не грузить весь бандл */}
            </Routes>
        </Suspense>
    </div>
    )
}