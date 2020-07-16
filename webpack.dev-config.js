/*eslint-disable */
const webpack = require('webpack');
const commonConfig = require('./webpack.common-config.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({'process.env': JSON.stringify({MODE: 'DEV'})})
    ],
});