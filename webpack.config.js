const client = require('./webpack.client.config'); // eslint-disable-line @typescript-eslint/no-var-requires
const server = require('./webpack.server.config'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = [
  client,
  server,
];
