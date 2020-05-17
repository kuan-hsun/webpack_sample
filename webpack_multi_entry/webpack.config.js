const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        home: './src/pages/home/home.js', // 第一個進入點
        about: './src/pages/about/about.js', // 第二個進入點
    },
    output: {
        filename: 'js/[name].js', // JS編譯後檔名
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],

    },
    // 使用 HTMLWebpackPlugin 個別打包不同HTML與引入對應JS模組 (預設會將打包出的所有 js 插入 html)
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'home.html',
            template: 'src/pages/home/home.html',
            chunks: ['home']
        }),
        new HTMLWebpackPlugin({
            filename: 'about.html',
            template: 'src/pages/about/about.html',
            chunks: ['about']
        })
    ]
}