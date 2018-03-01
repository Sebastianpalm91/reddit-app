import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  Linking,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import ApiContent from './src/components/Api/ApiContent';
import QueryInput from './src/components/Api/QueryInput';
import Feed from './src/components/Feed/Feed';
import Loading from './src/loadingscreen/Loading';
import Login from './src/components/Login/Login';
import Splash from './src/loadingscreen/Splash';
import FirstScreen from './src/components/Screens/FirstScreen';
import SecondScreen from './src/components/Screens/SecondScreen';
// {this.state.loaded ?  <Feed/> : <Splash/>}

const App = StackNavigator({
  First: {
    screen: Feed,
  },
  Login: {
    screen: Login,
  },
});
export default App;
