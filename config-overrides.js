const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@context': 'src/context',
    '@services': 'src/services',
    '@helper': 'src/utils/helper',
    '@svgs'  : 'src/assets/svgs'

  })(config);

  return config;
};