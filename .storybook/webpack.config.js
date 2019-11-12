module.exports = ({ config }) => {
	const babelRule = config.module.rules[0];
	const babelLoader = config.module.rules[0].use[0];

	babelRule.test = /\.(tsx?|jsx?|mjs)$/;
	babelLoader.options.sourceType = 'unambiguous';
	babelLoader.options.presets.push(
		require.resolve('@babel/preset-typescript')
	);

	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
