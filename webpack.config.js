const path = require("path");
const htmlWebpaclPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // entry: "./src/index.js", 
  entry: {
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {
    filename: "[name].[hash].js",
    clean: true,
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new htmlWebpaclPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: true,
      chunks: ['index'] // 指定导入的js文件，和上面的entry的key对应
    }),
    new htmlWebpaclPlugin({
      template: './public/login.html',
      filename: 'login.html',
      minify: true,
      chunks: ['login'] // 指定导入的js文件，和上面的entry的key对应
    })
  ]
};
