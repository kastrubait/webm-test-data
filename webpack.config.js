const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const pug = {
    test: /\.pug$/,
    use: ['pug-loader']
  }

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader']
}

const images = {
  test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  type: 'asset/images',
}

const css = {
  test: /\.(scss|css)$/,
  use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
}

const fonts = {
  test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
  type: 'asset/inline',
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [pug, js, images, css, fonts]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.pug'), 
      filename: 'index.html', 
      inject: true
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
