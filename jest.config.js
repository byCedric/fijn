module.exports = {
	clearMocks: true,
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
	],
	testRegex: '\\.test\\.(js|ts)x?$',
	transform: {
		'^.+\\.(js|ts)x?$': 'babel-jest',
	},
};
