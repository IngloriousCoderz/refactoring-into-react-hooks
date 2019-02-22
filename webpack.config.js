module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.woff2$/,
        use: { loader: 'url-loader', options: { limit: 50000 } },
      },
    ],
  },
}
