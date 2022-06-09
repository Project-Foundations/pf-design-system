const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT = 3006;

module.exports = {
  mode: 'development',
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "js/bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },

  devServer: {
    open: true,
    static: {
      directory: './src',
    },
    port: PORT,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
};