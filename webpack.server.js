const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
require("babel-polyfill");

module.exports = {
  target: "node",
  node:{
    __dirname: false   //設定 __dirname 為 dist 資料夾之路徑 
  },
  entry: ["babel-polyfill","./src/backEnd/app.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
      rules: [
        { test: /\.(js|jsx)?$/, 
          exclude: /node_modules/,
          use: { 
            loader: 'babel-loader', 
            options: { 
              presets: ['@babel/preset-react', '@babel/preset-env'] 
        } 
      } 
    },
  ],
  },
  externals: [webpackNodeExternals()],
};