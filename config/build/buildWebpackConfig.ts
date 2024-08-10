import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode, // production с минифицированным кодом
        entry: paths.entry, // entry point (точка входа)
        output: {
            filename: '[name].[contenthash].js', // выходной файл
            path: paths.build, // папка с выходным файлом
            clean: true, // очищать предыдущие сборки
        },
        plugins: buildPlugins(options), // список наших плагинов
        module: {
            rules: buildLoaders(options), // конфигурируем лоадеры, предназначенные для обработки не js файлы (jpg,css,ts)
        },
        resolve: buildResolvers(options), // эти параметры изменяют способ разрешения модулей.
        devtool: isDev ? 'inline-source-map' : undefined, // позволяет отследить в каком файле была ошибка при сборке (нужен только в dev для сокращения места в prod)
        devServer: isDev ? buildDevServer(options) : undefined, // сервер
    };
} // перенесем всю конфигурацию которую мы делали в корне проекта
