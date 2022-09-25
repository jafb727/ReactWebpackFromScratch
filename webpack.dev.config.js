/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: webpack.dev.config.js
 * Description: Project webpack development configuration
 */

/* --------------------------------------------- */

/** Plugins */
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

/** Libraries */
const path = require("path");
const { merge } = require("webpack-merge");

/** Utilities */
const commonWebpackConfig = require("./webpack.common.config");

/* --------------------------------------------- */

/** Webpack configuration module */
module.exports = merge(commonWebpackConfig, {
   mode: "development",
   output: {
      path: path.resolve(__dirname, "dist/dev"),
   },
   // Webpack server setup
   devServer: {
      static: {
         directory: path.join(__dirname, "dist/dev"),
      },
      compress: true,
      port: 9000,
      // Refreshes live
      open: true,
      // Letting React control routing
      historyApiFallback: true,
   },
   // Exposes code source map in browser dev tools
   devtool: "source-map",
   module: {
      rules: [
         {
            test: /\.(sa|sc|c)ss$/,
            use: [
               {
                  // Creates `style` nodes from JS strings
                  loader: "style-loader",
               },
               {
                  // Translates CSS into CommonJS
                  loader: "css-loader",
                  options: {
                     modules: {
                        localIdentName: "[local]__[hash:base64]",
                     },
                  },
               },
               {
                  // Dynamic class prefixes for each browser support
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: [["postcss-preset-env", {}]],
                     },
                  },
               },
               {
                  // Compiles Sass to CSS
                  loader: "sass-loader",
               },
            ],
         },
      ],
   },
   plugins: [
      // Analyze bundle sizing
      new BundleAnalyzerPlugin({}),
   ],
});
