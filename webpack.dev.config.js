module.exports = {
    mode: "development",
    devtool: 'eval-cheap-source-map',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8001
    }
}