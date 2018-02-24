import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
       } from 'react-native';
import ApiContent from './src/components/Api/ApiContent';
// import Login from './src/components/Login/Login';
// import Splash from './src/loadingscreen/Splash';

export default class App extends React.Component {



  render() {
    return (
      <View style={styles.container}>
        <ApiContent/>
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
