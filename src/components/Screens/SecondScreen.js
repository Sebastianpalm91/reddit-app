import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';


export default class SecondScreen extends Component{
    static navigationOptions = {
      title: 'Second Screen',
    };
    render (){
      return (
        <View style={styles.container}>
          <Text>Screen2 </Text>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
