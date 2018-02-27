import React, { Component } from 'react';
import { StyleSheet, Text,  View, TextInput, TouchableOpacity, StatusBar, } from 'react-native';

export default class LoginForm extends Component{
  render (){
    return (
      <View style={styles.container}>
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

        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 50
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
