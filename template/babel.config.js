module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "module:react-native-dotenv",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@src": "./src",
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@contexts": "./src/contexts",
          "@routes": "./src/routes",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
