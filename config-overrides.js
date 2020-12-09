/* config-overrides.js */
const sharp = require('sharp');

module.exports = function override(config, env) {
  sharp();
  return config;
}
