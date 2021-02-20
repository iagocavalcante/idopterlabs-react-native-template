const presets = ['module:metro-react-native-babel-preset']
const plugins = ['module:react-native-dotenv']

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      "@": "./src",
      "@assets": "./src/assets",
      "@components": "./src/components",
      "@contexts": "./src/contexts",
      "@routes": "./src/routes",
      "@screens": "./src/screens",
      "@utils": "./src/utils",
    },
  },
])

module.exports = {
  presets,
  plugins,
}
