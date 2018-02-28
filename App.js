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

import ApiContent from './src/components/Api/ApiContent';
import QueryInput from './src/components/Api/QueryInput';
import Feed from './src/components/Feed/Feed';
import Loading from './src/loadingscreen/Loading';
import Login from './src/components/Login/Login';
import Splash from './src/loadingscreen/Splash';
// {this.state.loaded ?  <Feed/> : <Splash/>}

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super()
    Loading.load(v => this.setState({loaded: true}));
  }
  onPressSearch = term => {
    console.log(term);
  }
  render() {
    return (
      <View style={styles.container}>
      <QueryInput
      onPressSearch={this.onPressSearch}
      />
      <Button
        onPress={ ()=> Linking.openURL("https://www.reddit.com/api/v1/authorize?client_id=HX3cUg6KrxLTRg&response_type=code&state=snip&redirect_uri=http://localhost:8888/App.js&duration=temporary&scope=identity+read")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
