/*
Webpack Config for the webprojects
- Bundlejs
- SASS to CSS
*/

var extractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new extractTextPlugin({
	filename : './main.css'
})

module.exports = {
	entry : './resources/scripts/index.js',
	output : {
		filename : './bundle.js',

	},
	module : {
		rules : [
			
			{
		      test: /\.scss$/,
		      use : extractPlugin.extract({
		      	use: ['css-loader' ,'sass-loader']
		      })
    		}
		]
	},
	plugins : [
		extractPlugin
	]
	
};