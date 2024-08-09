import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";


render(
    // что рендерим
    // BrowserRouter для работы роутинга ThemeProvider для того чтобы передать контекст темы
    <BrowserRouter> 
        <ThemeProvider>
            <App /> 
        </ThemeProvider>
    </BrowserRouter>,
    // где рендерим
    document.getElementById('root')
)