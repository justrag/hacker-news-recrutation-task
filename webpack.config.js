const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'html'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
module.exports = config;
