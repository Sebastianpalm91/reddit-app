import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import ApiContent from './src/components/Api/ApiContent';
import QueryInput from './src/components/Api/QueryInput';
import Feed from './src/components/Feed/Feed';
import Loading from './src/loadingscreen/Loading';
import Login from './src/components/Login/Login';
import Splash from './src/loadingscreen/Splash';
// {this.state.loaded ?  <Feed/> : <Splash/>}
// <QueryInput
// onPressSearch={this.onPressSearch}
// />

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super()
    Loading.load(v => this.setState({loaded: true}));
  }
  onPressSearch = term => {

  }
  render() {
    return (
      <View style={styles.container}>
        <Feed/>
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
