import HTMLWebpackPlugin from 'html-webpack-plugin'// const HTMLWebpackPlugin = require('html-webpack-plugin');
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack';// const webpack = require('webpack');
import { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
            new HTMLWebpackPlugin({
              template: paths.html  //используется как шаблон
            }), //плагин для сборки нашего index.html
            new webpack.ProgressPlugin(), //отслеживание прогресса сборки
            new MiniCssExtractPlugin({ //плагин для того чтобы css код был не в собранном js а в отдельном файле main.[].css в папке css (в данном файле ВСЕ стили, поэтому либо используем БЭМ либо изоляция при помощи css modules)
              filename: 'css/[name].[contenthash:8].css',
              chunkFilename: 'css/[name].[contenthash:8].css' // для асинхронных файлов
            })
          ]
    
}