import { ResolveOptions } from 'webpack';// const webpack = require('webpack');

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], //позволяет при импорте не указывать расширения файлов
      }
    
}