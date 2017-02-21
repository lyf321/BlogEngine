const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel-loader?presets[]=react,presets[]=es2015']
            }
        ]
    }
};