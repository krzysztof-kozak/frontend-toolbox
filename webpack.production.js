const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = ({ mode }) => {
  return merge(common, {
    mode,
    devtool: 'source-map',
    optimization: {
      /*
			splitChunks: 'all' allows webpack to extract duplicate dependencies.

			Example: if both index.js and anotherModule.js use 'lodash' library, then the library
			will be extracted to a separate place, removing some unnecessary duplication of code.

			Learn more:
				- https://webpack.js.org/guides/code-splitting#splitchunksplugin
			*/
      splitChunks: {
        chunks: 'all',

        /*
			From the webpack webite:
			"It's also good practice to extract third-party libraries, such as lodash or react, to a separate vendor chunk as they are less likely to change than our local source code. This step will allow clients to request even less from the server to stay up to date."
			*/
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },

      /*
			Since we are splitting modules into separate bundles, webpack allows further
			optimization of extracting runtime code for thuse modules into a separate chunk.

			runtimeChunk: 'single' creates a single runtime bundle for all chunks.

			Learn more:
				- https://webpack.js.org/guides/caching/#extracting-boilerplate
			*/
      runtimeChunk: 'single',

      /*
			We use deterministic ids to help with caching.
			Learn more:
				- https://webpack.js.org/guides/caching/#module-identifiers
			*/
      moduleIds: 'deterministic',
    },
  });
};
