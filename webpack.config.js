module.exports = {
  mode: 'production',
  entry: {
    index: './src/ts/main.ts',
  },

  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.ts$/,
        // exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
