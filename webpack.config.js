const path = require('path');

module.exports = {
    entry: './pages/_app.tsx',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                type: 'asset/resource',
            },
        ],
    },
};
