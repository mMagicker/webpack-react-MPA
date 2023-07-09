const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar"); // 打包进度条

const isDevProduction = process.env.NODE_ENV === "production";

const config = {
  entry: {
    pc: path.resolve(__dirname, "../src/pc"),
    mobile: path.resolve(__dirname, "../src/mobile"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  output: {
    clean: true,
    filename: isDevProduction ? "[name].[contenthash:6].js" : "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        include: path.resolve(__dirname, "../src"),
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        include: path.resolve(__dirname, "../src"),
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "../src"),
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "../src"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
      title: "webpackMPA",
    }),
    new WebpackBar(),
  ].filter(Boolean),
};

module.exports = config;
