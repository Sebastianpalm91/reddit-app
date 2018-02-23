import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

export default class LoginForm extends Component{
  render (){
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Username or Email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        secureTextEntry
        style={styles.input}
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
    padding: 20
  }
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 10
    color: 'white',
    paddingHorizontal: 10
  }
  buttonContainer: {
    backgroundColor: '#7f8c8d',
    paddingVertical 15
  }
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  }
})
