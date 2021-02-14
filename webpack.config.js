const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack 配置
module.exports = {
    // 入口文件
    entry: './src/index.ts',

    // 打包文件
    output: {
        // 指定打包文件的目录
        // __filename指的是当前解析文件的实际物理地址，而__dirname指的是此文件在被执行时所在的地址
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: 'bundle.js',

        // 告诉webpack不使用箭头函数
        // environment: {
        //     arrowFunction: false,
        // }
    },

    // webpack要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader 从后往前执行
                use: [
                    // 配置loader
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "85",
                                            "ie": "11"
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式  usage 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules|basis/
            },
            // 设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入postcss-loader
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },

    // 配置WebPack插件
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'TTTTS'
            template: './src/template.html'
        }),
    ]
}
