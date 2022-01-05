const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = ({ mode }) => {
	return merge(common, {
		mode: mode,
		devtool: 'eval-cheap-module-source-map',

		devServer: {
			host: 'localhost',
			port: '8080',
			static: './distribution',
			watchFiles: ['./source/**/*'],
		},

		optimization: {
			/*
			In most cases, 'multiple' (default) value will work out well.
			
			Change this to 'single' if you are running multiple entry points.
			Learn more at:
			- https://webpack.js.org/guides/code-splitting/#prevent-duplication
			- https://bundlers.tooling.report/code-splitting/multi-entry/
			
			You might encounter this gotcha, too:
			
			> [HMR] Update failed: ChunkLoadError: Loading hot update chunk index failed.
			> (missing: http://localhost:8080/someFileName.hash.hot-update.js)
			
			In which case, changing this value to 'single' will fix the issue.
			Learn more at:
			-https://stackoverflow.com/questions/65640449/how-to-solve-chunkloaderror-loading-hot-update-chunk-second-app-failed-in-webpa
			
			*/
			runtimeChunk: 'multiple',

			/* 
			For better development / debugging purposes, we used 'named' ids here.

			The generated bundles will use readable names such as:
				- index.bundle.js
				- runtime~index.bundle.js
				- vendors.bundle.js

			When in production mode, we will use "deterministic" module ids.
			This is explained in the production config file.
			*/
			moduleIds: 'named',
		},
	});
};
