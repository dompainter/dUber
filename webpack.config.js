import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    module: {
        rules: [
            {
                // compile any React, ES6 and above into normal ES5 syntax
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader' // translates CSS into CommonJS
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
}
