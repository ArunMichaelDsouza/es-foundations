module.exports = {
	entry: './js/src/script.js',
	output: {
		filename: './js/build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
			}
		]
	}
};