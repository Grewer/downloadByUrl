const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				include: path.join(__dirname, './src'),
			}
		]
	},
	plugins: [],
	entry: {
		index: './src/index.ts'
	},
	output: {
		filename: 'downloadByUrl.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'downloadByUrl',
		libraryTarget: 'umd',
		libraryExport: "default",
	}
}
