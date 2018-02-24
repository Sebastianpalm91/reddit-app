import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
       } from 'react-native';
import ApiContent from './src/components/Api/ApiContent';
// import Login from './src/components/Login/Login';
// import Splash from './src/loadingscreen/Splash';
<<<<<<< HEAD
import QueryInput from './src/components/Api/QueryInput';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QueryInput/>
        <Text>{QueryInput.passwordInput}</Text>
        <ApiContent/>
=======
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
>>>>>>> 4dedfb0f2a95dbc2a9d21b302f9ac389f00ea9d0
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
  },
});
