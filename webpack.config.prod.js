const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        library: 'CustomComponents',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    },
});
