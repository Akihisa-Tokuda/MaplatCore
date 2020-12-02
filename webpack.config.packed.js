const webpack = require('webpack');
const pjson = require('./package.json');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'maplat_core': './tmpl/web-bridge_packed.js'
    },
    output: {
        path: `${__dirname}/dist_packed`,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules(?!\/@maplat\/tin)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "corejs": 3
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `${pjson.name} v${pjson.version} | ${pjson.author} | license: ${pjson.license}`
        })
    ]
};
