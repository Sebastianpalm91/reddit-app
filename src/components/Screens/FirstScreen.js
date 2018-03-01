import React, { Component } from 'react';
import { StyleSheet, View, Button,} from 'react-native';


export default class FirstScreen extends Component{
    static navigationOptions = {
      title: 'First Screen',
    };
    render (){
      return (
        <View style={styles.container}>
          <Button
            // onPress={
            //
            // }
            title = "Go to screen 2"
          />
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
