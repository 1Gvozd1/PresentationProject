import path from 'path';// const path = require('path');
import webpack from 'webpack';// const webpack = require('webpack');
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';



export default (env: BuildEnv) => { //возвращаем функцию а не сам конфиг чтобы получить доступ к переменным окружения (--env в package.json) передаем их в качестве аргумента env
  const mode = env.mode ?? 'development';
  console.log(mode);
  const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),

};
  const isDev = mode === 'development';
  const PORT = env.port ?? 3000;

  const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT,
})

  return config 
};