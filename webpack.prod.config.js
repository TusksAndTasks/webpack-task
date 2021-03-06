const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: false,
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name].[ext][query]`;
        },
    },
    module: {
        rules: [
        {
            test: /\.(scss|css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        }
    },
    plugins:[
        new MiniCssExtractPlugin(
            {
                filename: '[name].css'
            }
        ),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {from: 'public/assets/images/WS-Logo-Mono.svg', to: 'assets/images'}
            ]
        })
    ],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
}