/**
 * @format
 */


import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import Welcome from './screenApp/HomeScreen'

AppRegistry.registerComponent(appName,() => Welcome);
