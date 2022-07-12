const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require("webpack-merge");

const commonConfig = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.js', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/resource',
                generator:{
                    filename: '[name][ext]'
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/WS-Logo-Mono.svg',
            templateParameters: {
                title: 'Webpack App',
                description: 'Задание по webpack 5',
                keywords: 'Webpack 5, test, front-academy',
                author: 'Work Solutions',
                viewport: 'width=device-width, initial-scale=1.0'
            }
        }),
    ]
}

module.exports = () => {
    const isProd = process.env.NODE_ENV === 'prod';
    const specifiedConfig = isProd ? require("./webpack.prod.config") : require("./webpack.dev.config");
    // noinspection CommaExpressionJS,JSCheckFunctionSignatures
    return merge(commonConfig, specifiedConfig);
}