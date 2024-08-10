// DevServer нам нужен для того чтобы не писать постоянно npm run build. Он будет автоматически перезапускать сборку и отдавать обновленные файлы

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';// переименовал чтобы не было конфликта с Configuration самого webpack
import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions) : DevServerConfiguration {
    return {
        port,
        open: true, // будет автоматически открывать страницу с нашим приложением
        historyApiFallback: true, // без нее до http://localhost:3000/about можно добраться только через http://localhost:3000 и Link
        hot: true, // для того чтобы при сохранении кода изменения применялись без обновления страницы
    };
}
