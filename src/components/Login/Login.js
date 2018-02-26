import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component{
  render (){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../../Images/RedditLogo.png')}
          />
          <Text style={styles.title}>Reddit app made by Awesome dudes for awesome ppl</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: 'white',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.8,
  }
})
