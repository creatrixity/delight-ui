const web = require('./webpack/webpack.config.client.js');
const node = require('./webpack/webpack.config.server.js');

module.exports = [node, web];
