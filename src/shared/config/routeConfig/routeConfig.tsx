// конфиг для наших путей, чтобы мы вручную не прописывали Rout'ы
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes { // enum всех наших роутов (для Redux)
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'

}

export const RoutePath: Record<AppRoutes, string> = { // для каждого маршрута из enum AppRoutes укажем путь до компонента
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*', // все маршруты, если ни один ранее не отработал
};

export const routeConfig: Record<AppRoutes, RouteProps> = { // определяем маршруты и компоненты которые мы должны отрисовать
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
