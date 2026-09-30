module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@core': './src/core',
            '@features': './src/features',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
