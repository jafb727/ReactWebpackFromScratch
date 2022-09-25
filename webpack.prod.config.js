/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: webpack.prod.config.js
 * Description: Project webpack production configuration
 */

/* --------------------------------------------- */

/** Plugins */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

/** Libraries */
const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require("glob");
const { merge } = require("webpack-merge");

/** Utilities */
const commonWebpackConfig = require("./webpack.common.config");

/* --------------------------------------------- */

/** Constants */
const purgePath = {
   src: path.join(__dirname, "src"),
};

/* --------------------------------------------- */

/** Webpack configuration module */
module.exports = merge(commonWebpackConfig, {
   mode: "production",
   output: {
      path: path.resolve(__dirname, "dist/prod"),
   },
   module: {
      rules: [
         {
            test: /\.(sa|sc|c)ss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
               },
               {
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
                  loader: "sass-loader",
               },
            ],
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "[chunkhash].css",
         chunkFilename: "[chunkhash].css",
         ignoreOrder: false,
      }),
      new PurgeCSSPlugin({
         paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
         safelist: {
            deep: [/dsjs/],
         },
      }),
   ],
   optimization: {
      minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
   },
});
