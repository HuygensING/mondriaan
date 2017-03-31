const path = require('path');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "[name].js",
		path: __dirname + "/build",
		publicPath: '/build/',
	},
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
			entries: path.resolve(__dirname, '__entries__'),
		},
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
			}
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
	},
};
