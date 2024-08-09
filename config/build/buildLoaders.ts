import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
import webpack from 'webpack';// const webpack = require('webpack');
import { BuildOptions } from './types/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  
  //Если бы не использовали тайпскрипт (так как он уже умеет обрабатывать jsx) - нужен был бы транспилятор babel - babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/, //регулярка, которая ловит ts и tsx
    use: 'ts-loader', //список лоадеров, которые применяются к файлу
    exclude: /node_modules/, //исключения
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        isDev ? "style-loader" : MiniCssExtractPlugin.loader, // вместо "style-loader", так как без него css будет в собранном js файле, что подходит для dev мода, но не для prod мода
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: { // настройка лоадера
            modules: { // поддержка модулей, теперь наш класс .btn => .WJfas66YqMo9vlVy3cDg (с тэгами не работает!)
              auto: (resPath: string) => !!resPath.includes(".module."), // делаем .btn => .WJfas66YqMo9vlVy3cDg только для модулей, в противном случае index.scss не будет работать
              localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:8]' 
              : '[hash:base64:8]' // для dev мода у на более менее понятные названия в инспекторе, а в прод моде как и задумывали (.WJfas66YqMo9vlVy3cDg)
            } 
            
          }
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }


  return [ 
      typescriptLoader, //порядок важен!
      cssLoader,
  ]
}