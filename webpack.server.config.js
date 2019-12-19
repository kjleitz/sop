const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const base = require('./webpack.base.config'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  ...base,
  target: 'node',
  entry: {
    server: path.resolve(__dirname, 'src', 'server', 'index.ts'),
  },
};
