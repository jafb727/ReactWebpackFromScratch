/*
 * Author: Jose A Felix
 * Editor: Jose A Felix
 * Name: webpack.common.config.js
 * Description: Project webpack common configuration
 */

/* --------------------------------------------- */

/** Plugins */
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** Libraries */
const path = require("path");

/* --------------------------------------------- */

/** Webpack configuration module */
module.exports = {
   // Using multiple module entry setup
   entry: {
      index: path.resolve(__dirname, "src/index.js"),
   },
   output: {
      filename: "[chunkhash].bundle.js",
      // Chunk bundle name when lazy loading
      chunkFilename: "[chunkhash].bundle.js",
      // Outputting all assets in one folder
      assetModuleFilename: "assets/[hash][ext]",
      // Maintains output sanitized
      clean: true,
   },
   module: {
      rules: [
         // Compiles JSX code
         {
            test: /\.jsx?$/,
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
            use: [
               // Transpiles JS and JSX files
               {
                  loader: "babel-loader",
                  options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"],
                  },
               },
            ],
         },

         {
            // Compiles images files
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
         {
            // Compiles font files
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
         },
      ],
   },
   plugins: [
      // Appends bundles generated in main html page
      new HtmlWebpackPlugin({
         title: "React Webpack from Scratch",
         filename: "index.html",
         template: path.resolve(__dirname, "src/index.html"),
      }),
      // Initialize ES Lint engine (Lints JS and JSX files)
      new ESLintWebpackPlugin({ fix: true }),
   ],
   // Additional file extensions suported in app as import
   resolve: {
      extensions: [".js", ".jsx", "..."],
   },
   optimization: {
      runtimeChunk: "single",
      // Splits all bundles in chunks
      splitChunks: {
         chunks: "all",
         // Bundling vendors packages separately
         cacheGroups: {
            htmlentities: {
               test: /[\\/]node_modules[\\/]html-entities[\\/]lib/,
               name: "htmlentities",
               chunks: "all",
            },
            react: {
               test: /[\\/]node_modules[\\/]react/,
               name: "react",
               chunks: "all",
            },
            reactdom: {
               test: /[\\/]node_modules[\\/]react-dom/,
               name: "reactdom",
               chunks: "all",
            },
            router: {
               test: /[\\/]node_modules[\\/]@remix-run[\\/]router/,
               name: "router",
               chunks: "all",
            },
         },
      },
   },
};
