const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // 打包分析
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 打包耗时分析
const WebpackBar = require("webpackbar"); // 打包进度条

const smp = new SpeedMeasurePlugin();

const isAnalyze = process.env.ANALYZE
const isSpeed = process.env.SPEED

const config = {
	mode: "development",
	entry: {
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
		path: path.resolve(__dirname, "./dist"),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
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
			title: "index",
			chunks: ["index"],
		}),
		new WebpackBar(),
		isAnalyze && new BundleAnalyzerPlugin(),
	].filter(Boolean),
	optimization: {
		splitChunks: {
			maxSize: 2000
		}
	}
};

module.exports = isSpeed ? smp.wrap(config) : config
