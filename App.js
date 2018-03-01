import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Feed from './src/components/Feed/Feed';
import Login from './src/components/Login/Login';
import Splash from './src/loadingscreen/Splash';
import SplashContent from './src/loadingscreen/SplashContent';
// {this.state.loaded ?  <Feed/> : <Splash/>}

const App = StackNavigator({
  First: {
    screen: Feed,
  },
  Login: {
    screen: Login,
  },
  Splash: {
    screen: Splash,
  },
  SplashContent: {
    screen: SplashContent,
  }
});
export default App;
