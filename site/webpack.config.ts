import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};

export default config;
