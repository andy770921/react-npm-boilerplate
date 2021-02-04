const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
    mode: 'development',
    plugins: [new webpack.DefinePlugin({ 'process.env': JSON.stringify({ MODE: 'DEV' }) })],
});
