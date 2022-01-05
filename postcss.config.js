module.exports = ({ mode }) => {
	const plugins = [require('autoprefixer')];

	if (mode === 'production') {
		plugins.push(require('cssnano'));
	}

	return plugins;
};
