import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from './src/config'
import NpmInstallPlugin from 'npm-install-webpack-plugin';

const DEBUG = true;

module.exports = {
	entry: {
		app: path.join(__dirname, "src")
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: "main.js"
	},

	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
	},

	devtool: 'eval-source-map',

	devServer: {
		contentBase: "build",

		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,

		// Display only errors to reduce the amount of output.
		stats: 'errors-only',

		// Parse host and port from env so this is easy to customize.
		host: "0.0.0.0",
		port: 3000
	},

	plugins: [
		new HtmlWebpackPlugin(
			{
				title: config.title,
				template: path.resolve(__dirname, 'src/index.html'),
				minify: {
					removeComments: true,
					collapseWhitespace: true
				}
			}
		),
		new webpack.HotModuleReplacementPlugin(),
		new NpmInstallPlugin({
			save: true
		})
//      new webpack.optimize.DedupePlugin(),
//      new webpack.optimize.UglifyJsPlugin({minimize: true})

	],

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'node_modules/react-routing/src'),
					path.resolve(__dirname, 'src')
				],
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000'
			},
			{
				test: /\.(eot|ttf|wav|mp3)$/,
				loader: 'file-loader'
			}
		]
	}
};