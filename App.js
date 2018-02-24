import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
       } from 'react-native';
import ApiContent from './src/components/Api/ApiContent';
// import Login from './src/components/Login/Login';
// import Splash from './src/loadingscreen/Splash';
import QueryInput from './src/components/Api/QueryInput';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QueryInput/>
        <Text>{QueryInput.passwordInput}</Text>
        <ApiContent/>
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
