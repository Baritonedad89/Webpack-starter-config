/* webpack should examine all your modules, (optionally) transform them, 
then intelligently put all of them 
together into one or more bundle 
1. the entry point of your application
2. which transformations, if any, to make on your code
3. the location to put the newly formed bundles */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  // the entry point of the code
  entry: "./app/index.js",
  // loaders so that webpack can bundle more than json and js
  module: {
    rules: [
      // takes the type of file and the loader to use
      { test: /\.svg$/, use: "svg-inline-loader" },
      // style-loader will inject CSS into the DOM by putting css files into a style header
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // babel loader will transpile all js files
      { test: /\.(js)$/, use: "babel-loader" }
    ]
  },
  // where to put the bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
//   plugins allow you to create tasks after the bundle is created
  plugins: [
      new HtmlWebpackPlugin(),
    //  if using React set node environment to production when built
    // new webpack.EnvironmentPlugin([
    //     'NODE_ENV': 'production'
    // ])
  ],
//   minifies and strips out code to reduce bundle size 
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
