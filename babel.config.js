module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.js",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
    ],
  };
};
