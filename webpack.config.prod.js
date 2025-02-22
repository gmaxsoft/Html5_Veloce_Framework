const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/js/vendor', to: 'assets/js/vendor' },
        { from: 'assets/img/icon/icon.svg', to: 'assets/img/icon/icon.svg' },
        { from: 'assets/img/icon/favicon.ico', to: 'assets/img/icon/favicon.ico' },
        { from: 'assets/img/icon/icon.png', to: 'assets/img/icon/icon.png' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
    new ImageminWebpWebpackPlugin()
  ],
});
