const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

// PostCSS plugin to parse CSS and add vendor prefixes to CSS rules, autoprefixing, linting and more!
const postCssOptions = {
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'), // a PostCSS plugin to fix flexbox issues.
    require('postcss-preset-env')({
      // postcss-preset-env is a plugins preset with polyfills and Autoprefixer to write future CSS today.
      autoprefixer: {
        // It parses your CSS and adds vendor prefixes to CSS rules
        flexbox: 'no-2009', // flexbox: "no-2009" will add prefixes only for final and IE versions of specification.
        grid: true, // grid: true will enable Grid Layout prefixes for IE.
      },
      stage: 3,
    }),
  ],
  sourceMap: true,
};




const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  devtool: '',
  entry: path.join(process.cwd(), 'src/index.tsx'),
  output: {
    filename: 'static/js/bundle.[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          parse: {},
          compress: {
            ecma: 5,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: {
            inline: false,
            annotation: false,
          },
        },
      }),
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              importLoaders: 1,
              modules: true,
              minimize: true,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { postCssOptions },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      filename: '[path].gz[query]',
      threshold: 8192, // any file more than 8 KB will be gzipped
      minRatio: 0.8,
      deleteOriginalAssets: false,
      test: /\.(html|css|js|gif|svg|ico|woff|ttf|eot)$/,
      exclude: /(node_modules)/,
    }),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),
  ],
});
