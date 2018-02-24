import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
       } from 'react-native';
import ApiContent from './src/components/Api/ApiContent';
// import Login from './src/components/Login/Login';
// import Splash from './src/loadingscreen/Splash';
import Loading from './src/loadingscreen/Loading';
export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super();
    Loading.load(v => this.setState({loaded: true}));
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ? <ApiContent/> : <Text>Loading...</Text>}
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
