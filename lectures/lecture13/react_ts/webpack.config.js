const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.join(__dirname, '/dist');

module.exports = {
  entry: [
    './src/index.tsx',
    
  ],
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    inline: true,
    port: 8080
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'React @ FMI',
    template: 'index.html'
  })],
  
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};