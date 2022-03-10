module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
        alias: {
          router: './src/router',
          screens: './src/screens',
          assets: './src/assets',
          components: './src/components'
        }
      }
    ]
  ]
};
