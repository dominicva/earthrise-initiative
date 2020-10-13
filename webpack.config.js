const path = require('path');

/* eslint-disable no-undef */
module.exports = {
  mode: 'development',
  entry: {
    welcome: './src/home-page/home.js',
    about: './src/education-page/education.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: 'assets/scripts',
  },
};
