import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import { App } from './app/App';

import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    // что рендерим
    // BrowserRouter для работы роутинга
    // ThemeProvider для того чтобы передать контекст темы
    // ErrorBoundary для отлавливания ошибок (единственный классовый компонент :) )
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    // где рендерим
    document.getElementById('root'),
);
