const path = require("path");
const htmlWebpaclPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[hash].js",
    clean: true,
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new htmlWebpaclPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: true
    })
  ]
};
