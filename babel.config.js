module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@constants': './src/constants',
            '@hocs': './src/hocs',
            '@hooks': './src/hooks',
            '@navigations': './src/navigations',
            '@screens': './src/screens',
            '@stores': './src/stores',
          },
        },
      ],
    ],
  };
};
