import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";

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