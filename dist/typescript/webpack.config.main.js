// required importants
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// CONSTANT
import { __MAIN__, __SUPPORT_EXT_ARR__, __INPUT_PATH__, __INPUT_SEC_PATH__ } from './utils/constants/index.js';
/* eğer react içi kullanmak istiyorsan react ön yükleyici gerekir devDepend olarak kurulu tek yapman gereken '@babel/preset-react' bunu js yerindeki presets arrayine eklemek */
const config = {
    entry: __INPUT_PATH__ ? __INPUT_PATH__ : __INPUT_SEC_PATH__,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(m?c?js|jsx)$/,
                resolve: {
                    fullySpecified: false
                },
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(hbs|handlebars)$/,
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            runtime: 'handlebars',
                        },
                    },
                ],
            },
            {
                test: /\.ejs$/,
                use: [
                    //{loader:'ejs-webpack-loader'},
                    { loader: 'ejs-compiled-loader' },
                    //{loader:'ejs-plain-loader'},
                    /*{
                         loader:'ejs-loader',
                         options: {
                              esModule: false,
                         },
                    }*/
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ]
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.geojson$/,
                type: 'json',
            }
        ]
    },
    resolve: {
        extensions: __SUPPORT_EXT_ARR__,
        alias: {
            '@': __MAIN__
        },
    },
};
export default config;
