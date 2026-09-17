module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        { jsxImportSource: 'nativewind', reanimated: true },
      ],
      'nativewind/babel',
    ],
    env: {
      production: {},
    },
    plugins: [],
  };
};
