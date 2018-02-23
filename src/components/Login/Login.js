import React, { Component } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';

export default class Login extends Component{
  render (){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          styles={styles.logo}
          source={require('../../Images/RedditLogo.png')}
          />
          <Text style={styles.title}>Reddit app made by Awesome dudes for awesome ppl</Text>
        </View>
        <View style={styles.formContainer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6'
  }
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
  logo: {
    width: 100,
    height: 100
  }
  title: {
    color: 'white',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.8
  }
})
