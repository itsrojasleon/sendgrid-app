const devConfig = require('./dev');
const prodConfig = require('./prod');

let config;

if (process.env.NODE_ENV === 'production') {
  config = prodConfig;
} else {
  config = devConfig;
}

module.exports = config;
