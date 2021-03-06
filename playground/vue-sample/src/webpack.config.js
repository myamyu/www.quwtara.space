/*global __dirname*/
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'js', 'app.js'),
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, '..')
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};
