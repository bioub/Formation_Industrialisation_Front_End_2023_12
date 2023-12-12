/** @type {import('webpack').Configuration} */
const config = {
  devtool: false,
  entry: './src/main.js',
  output: {
    clean: true,
    filename: 'bundle.js'
  }
};

module.exports = config;
