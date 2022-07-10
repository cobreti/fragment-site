const path = require('path');

module.exports = {
    entry: './src/fragment-site.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.json'
                    }
                }],
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'fragment-site.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'fragment-site',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    mode: 'development',
    devtool: 'source-map'
};
