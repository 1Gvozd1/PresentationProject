// Корневой компонент
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                {/* данный Suspense для асинхронной подгрузки переводов */}
                <NavBar />

                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
