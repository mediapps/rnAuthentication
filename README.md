# React-Native starter app

A simple app with included
- eslint
- simple architecture

## Clone project and change its name

- First copy the directory which your to-be-name-changed application exists. And go to your newly cloned directory.
- Change the name at index.ios/android.js file which is given as a parameter to AppRegistry.
- Change the name and version accordingly on package.json
- Delete /ios and /android folders which are remaining from your older app.
- run `react-native upgrade` to generate /ios and /android folders again.
- run `react-native link` for any external dependency.
- Finally run `react-native run-ios` or anything you want.
