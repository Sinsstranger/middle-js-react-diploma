const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode,
  entry: "./index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
      "@hooks": path.resolve(__dirname, "src", "hooks"),
      "@lang": path.resolve(__dirname, "src", "lang"),
      "@layouts": path.resolve(__dirname, "src", "layouts"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@store": path.resolve(__dirname, "src", "store"),
      "@utils": path.resolve(__dirname, "src", "utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          "import-glob-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader", // Or 'url-loader' for base64 encoding
            options: {
              name: "[path][name].[ext]", // Adjust filename format if needed
              outputPath: "images", // Output directory for images
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Барашкин Марат Валерьевич | Web-Developer",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/images", to: "images", noErrorOnMissing: true },
        { from: "public/fonts", to: "fonts", noErrorOnMissing: true },
        {
          from: "public/recommendation-letters",
          to: "recommendation-letters",
          noErrorOnMissing: true,
        },
        {
          from: "public/self-employed-data",
          to: "self-employed-data",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
