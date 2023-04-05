const { merge } = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 400000000,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
