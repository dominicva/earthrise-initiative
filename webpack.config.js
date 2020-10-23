const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* eslint-disable no-undef */
module.exports = {
  mode: 'development',
  entry: {
    homePage: './src/js/index.js',
    projects: './src/js/projects.js',
    resources: './src/js/resources.js',
    education: './src/js/project-areas/education.js',
    mentalHealth: './src/js/project-areas/mentalHealth.js', 
    basicIncome: './src/js/project-areas/basicIncome.js', 
    animalWelfare: './src/js/project-areas/animalWelfare.js', 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/projects.html',
      filename: './projects.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/resources.html',
      filename: './resources.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/areas/education.html',
      filename: './education.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/areas/mental-health.html',
      filename: './mental-health.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/areas/basic-income.html',
      filename: './basic-income.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/views/areas/animal-welfare.html',
      filename: './animal-welfare.html',
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" })
  ],
};
