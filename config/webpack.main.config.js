const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const SRC_PATH = path.resolve(__dirname, '..', 'src');
const DIST_PATH = path.resolve(__dirname, '..', 'dist');
const isProduction = process.env.NODE_ENV == "production";

/* 基础 配置 */
module.exports = {
    entry: path.resolve(SRC_PATH, 'main/main.ts'),
    target: "electron-main",
    resolve: {
        extensions: ['.ts'],
        plugins: [new TsConfigPathsPlugin()]
    },
    output: {
        filename: 'main.js',
        path: DIST_PATH,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/, loader: "ts-loader",
            }
        ]
    },
    node: {
        __dirname: !isProduction,
        __filename: !isProduction
    }
};