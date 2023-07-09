const config = require("./webpack.common.js");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  devServer: {
    open: true,
    port: 8081,
    client: {
      logging: "error",
    },
  },
};

const mergeConfig = merge(config, devConfig);

module.exports = mergeConfig;