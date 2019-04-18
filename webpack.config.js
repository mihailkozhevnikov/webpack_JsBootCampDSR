const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join, resolve } = require('path');

module.exports = {
  entry: './src/index.js',
    module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, 
	      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
	  {
  test: /\.(png|jpg)$/,
  loader: 'file-loader'
}
    ]
  },
  
    plugins: [
	    new HtmlWebpackPlugin({
       inject: false,
       hash: true,
       template: resolve(__dirname, 'src', 'index.html'),
       filename: 'index.html'
     }),
	
	    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  }
};