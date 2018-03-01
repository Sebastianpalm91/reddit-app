import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component{
  render (){
    const {navigate} = this.props.navigation;
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
        <StatusBar
        barstyle="light-content"
        />
          <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
          <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Splash', {})}>
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
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
  },
  formContainer: {
    padding: 20,
    marginBottom: 50,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(66, 98, 129, 0.8)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'rgba(57, 118, 180, 0.84)',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  }
})
