const webpack = require('webpack');
const {resolve} = require('path');
module.exports = env => {
  return {
    entry: {
      app: [ './js/main.js'],
      vendor: [ 'react', 'react-dom', 'es6-promise', 'whatwg-fetch']
    },
    output: {
      filename: 'bundle.[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devServer: {
      inline: true,
      contentBase: './dist',
      https: false,
      //host: '192.168.1.129',
      //port: 5555,
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      ]
    },
    plugins: [
      env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ].filter(p => !!p)
  }
}
