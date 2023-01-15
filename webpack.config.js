var path = require('path');

module.exports = {
  entry: [
    './src/index.ts'
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // library: "test",
    // libraryTarget: "umd"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules"]
  },
  plugins: [
    //new CheckerPlugin()
  ]
};