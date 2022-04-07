const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const NET_ENV = process.env.NET_ENV
console.log(NET_ENV)
const outputPath = (function () {
  if (NET_ENV === "government") {
    return path.resolve(__dirname, "./dist/government")
  } else {
    return path.resolve(__dirname, "./dist/enterprise")
  }
})()
module.exports = {
  entry: {
    government: "./src/government",
    enterprise: "./src/enterprise",
    index: "./src/index",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    open: true,
    port: 8081,
    client: {
      logging: "error",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      title: "government",
      filename: `${outputPath}/government.html`,
      chunks: ["government"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      title: "enterprise",
      filename: `${outputPath}/enterprise.html`,
      chunks: ["enterprise"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      title: "index",
      chunks: ["index"],
    }),
  ],
}
