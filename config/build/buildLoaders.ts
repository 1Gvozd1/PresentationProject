import webpack from 'webpack';// const webpack = require('webpack');
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = { // лоадер для того чтобы webpack правильно обрабатывал svg (будет их превращать в React компоненты)
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // Если бы не использовали тайпскрипт (так как он уже умеет обрабатывать jsx) - нужен был бы транспилятор babel - babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/, // регулярка, которая ловит ts и tsx
        use: 'ts-loader', // список лоадеров, которые применяются к файлу
        exclude: /node_modules/, // исключения
    };

    const cssLoader = buildCssLoader(isDev); // так как данный объект используется дополнительно в storybook

    const fileLoader = { // лоадер для того чтобы webpack правильно обрабатывал другие картинки (будет их превращать в React компоненты)
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        typescriptLoader, // порядок важен!
        cssLoader,

    ];
}
