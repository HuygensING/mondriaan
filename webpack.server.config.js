const path = require('path');

module.exports = {
	entry: "./src/server/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/build/server"
	},
	resolve: {
		alias: {
			client: path.resolve(__dirname, 'src/client'),
			common: path.resolve(__dirname, 'src/common'),
			server: path.resolve(__dirname, 'src/server'),
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
				options: {
					configFileName: './tsconfig.server.json',
				}
			}
		]
	},
	target: 'node',
};
