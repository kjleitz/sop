const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const base = require('./webpack.base.config'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  ...base,
  entry: {
    client: path.resolve(__dirname, 'src', 'client', 'index.ts'),
  },
  devServer: {
    contentBase: './dist',
  },
};
