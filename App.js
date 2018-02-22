import React from 'react';
import { AppRegistry,
   StyleSheet, Text, View, SectionList, } from 'react-native';
import Hello from './Hello';
import List from './List';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Hello/ >
      <List/ >
      <List/ >
      <List/ >
      <List/ >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
