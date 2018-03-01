import React, { Component } from 'react';
import { StyleSheet, Text,  View, TextInput, TouchableOpacity, StatusBar, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from '../../loadingscreen/Splash';


export default class LoginForm extends Component{
  render (){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 50
  },

})
