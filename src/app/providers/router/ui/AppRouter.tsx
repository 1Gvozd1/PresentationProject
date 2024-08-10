// файл с нашими роутами
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {' '}
            {/* показать крутилку до тех пор пока компонент не подгрузился */}
            <Routes>
                {' '}
                {/* все роуты что есть в нашем приложении нужно обернуть в Routes */}
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                        path={path}

                    />
                ))}
                {' '}
                {/* генерируем по нашему конфигу роуты */}
                {/* path - путь, element - компонент который хранится/отрисовывается по данному пути  */}
            </Routes>
        </Suspense>
    );
}
