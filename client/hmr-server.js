var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var webpackDevServerConfig = {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
};

new WebpackDevServer(webpack(config), webpackDevServerConfig)
    .listen(3000, 'localhost', listenCallback);

function listenCallback(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening at localhost:3000')
    }
}