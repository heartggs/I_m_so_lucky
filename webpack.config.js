const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/main.js",
    knowHyeji: "./src/knowHyeji.js",
    Hyeji: "./src/Hyeji.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //     },
        //   },
        // ],
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html", // main 페이지용 HTML 파일
      chunks: ["main"], // main.js를 연결
    }),
    new HtmlWebpackPlugin({
      template: "./knowHyeji.html",
      filename: "knowHyeji.html", // knowHyeji 페이지용 HTML 파일
      chunks: ["knowHyeji", "Hyeji"], // knowHyeji.js를 연결
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 5001,
    devMiddleware: {
      index: "index.html",
    },
  },
};
