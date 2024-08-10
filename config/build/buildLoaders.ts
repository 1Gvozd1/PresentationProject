import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
import webpack from 'webpack';// const webpack = require('webpack');
import { BuildOptions } from './types/config';

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

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // вместо "style-loader", так как без него css будет в собранном js файле, что подходит для dev мода, но не для prod мода
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: { // настройка лоадера
                    modules: { // поддержка модулей, теперь наш класс .btn => .WJfas66YqMo9vlVy3cDg (с тэгами не работает!)
                        auto: (resPath: string) => !!resPath.includes('.module.'), // делаем .btn => .WJfas66YqMo9vlVy3cDg только для модулей, в противном случае index.scss не будет работать
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]', // для dev мода у на более менее понятные названия в инспекторе, а в прод моде как и задумывали (.WJfas66YqMo9vlVy3cDg)
                    },

                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };

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
