const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
        publicPath: '/',
    },

    devServer: {
        port: 3000,
        open: true,
        contentBase: './public',
    },

    // 根据node的NODE_END决定启用不同插件
    plugins: process.env.NODE_ENV === 'production' ? [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        })
    ] : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-proposal-class-properties'
                            ],
                            include: path.resolve(__dirname, 'src'),
                            exclude: /node_modules/
                        }
                    }
                ]
            }
        ]
    },
}
