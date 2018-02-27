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
import Feed from './src/components/Feed/Feed';
import Loading from './src/loadingscreen/Loading';
import Login from './src/components/Login/Login';
import Splash from './src/loadingscreen/Splash';
// {this.state.loaded ? <Login/> : <Splash/> }

export default class App extends React.Component {

  state = {
    loaded: false
  }
  constructor(){
    super()
    Loading.load(v => this.setState({loaded: true}));
  }
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
      <QueryInput/>
      <Text>{QueryInput.passwordInput}</Text>
       <ApiContent/>
        {this.state.loaded ?  <ApiContent/>  : <Text>Loading...</Text>}

=======
        <Feed/>
>>>>>>> f0d9dff379fb7d080693a6d72c6eecc3bf0f0d61
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
