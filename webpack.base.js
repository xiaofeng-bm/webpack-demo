const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".jsx", ".js"], // 解析后缀名
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
