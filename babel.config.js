module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
				alias: {
					'src': './src',
				},
			},
		],
	],
	overrides: [{
		'plugins': [
			['@babel/plugin-transform-private-methods', {
				'loose': true,
			}],
		],
	}],
};
