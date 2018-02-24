import React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default class QeuryInput extends React.Component{
  render (){
    return (
      <View>
      <TextInput
      placeholder="Search for your favorite GIF!"
      placeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType="go"
      secureTextEntry
      style={styles.input}
      ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#7f8c8d',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  }
})
