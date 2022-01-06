const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = ({ mode }) => {
  const plugins = [autoprefixer];

  if (mode === 'production') {
    plugins.push(cssnano);
  }

  return plugins;
};
