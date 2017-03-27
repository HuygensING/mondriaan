const path = require('path');

module.exports = {
	entry: "./src/client/index.ts",
	output: {
			filename: "bundle.js",
			path: __dirname + "/build/client"
	},
	resolve: {
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
							configFileName: './tsconfig.client.json',
						}
					}
			]
	},
};
