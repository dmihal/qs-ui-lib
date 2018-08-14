const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: 'to-string-loader!css-loader?importLoaders=1',
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
				query: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
};
