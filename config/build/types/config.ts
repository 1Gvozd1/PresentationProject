
export type BuildMode = 'production' | 'development' //режим

export interface BuildPaths { //любые пути
    entry: string; //путь для entrypoint
    build: string; //путь до папки со сборкой
    html: string; //путь до html
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions { //Для конфигурации нашего конфига webpack (порт, пути, адреса API, dev или prod режим)
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number
}