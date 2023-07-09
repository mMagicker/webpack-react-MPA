const config = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 打包分析
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 打包耗时分析
const TerserPlugin = require("terser-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const isAnalyze = process.env.ANALYZE;
const isSpeed = process.env.SPEED;

const prodConfig = {
  mode: "development",
  // mode: "production",
  plugins: [isAnalyze && BundleAnalyzerPlugin()],
};
const mergeConfig = merge(config, prodConfig);
module.exports = isSpeed ? smp.wrap(mergeConfig) : mergeConfig;
