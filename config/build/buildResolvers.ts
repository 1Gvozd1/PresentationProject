import { ResolveOptions } from 'webpack';// const webpack = require('webpack');
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // позволяет при импорте не указывать расширения файлов
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'], // для того чтобы обращаться к src через абсолютные импорты
        mainFiles: ['index'], // для каждого модуля главным файлом будет index
        alias: {}, // если поставить @ то надо будет обращаться @shared/classNames

    };
}
