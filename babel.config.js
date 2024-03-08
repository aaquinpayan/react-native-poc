module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./app'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						tests: ['./tests/'],
						'@components': './app/components'
					}
				}
			],
			[
				'@tamagui/babel-plugin',
				{
					components: ['tamagui'],
					config: './tamagui.config.ts',
					logTimings: true,
					disableExtraction: process.env.NODE_ENV === 'development'
				}
			],
			'nativewind/babel'
		]
	};
};
