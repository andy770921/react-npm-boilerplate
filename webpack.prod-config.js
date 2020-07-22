/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common-config.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        library: 'CustomComponents',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
});
