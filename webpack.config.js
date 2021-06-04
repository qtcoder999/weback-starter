const path = require('path');

module.exports = {
    entry: {
        group: './src/group-info/index.js',
        message: './src/message-info/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: 'production',
};


