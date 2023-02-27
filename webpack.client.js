const Merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    client: path.join(__dirname, "./src/entry-client.jsx"),
  },
  output: {
    filename: "index.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: "mainfest-client.json" }),
    new MiniCssExtractPlugin({
      filename: "index.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Webpack App</title>
      </head>
      <body>
        <div id="app" />
      </body>
      </html>
        `,
    }),
  ],
});
