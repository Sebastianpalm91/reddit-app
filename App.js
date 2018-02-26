import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import ApiContent from './src/components/Api/ApiContent';
import Loading from './src/loadingscreen/Loading';
import Login from './src/components/Login/Login';
import Splash from './src/loadingscreen/Splash';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
  },
});
