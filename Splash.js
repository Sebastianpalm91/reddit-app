import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Reddit App!</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Awesome app</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#34495e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 20
  },
  subtitle: {
    color: 'white',
    fontWeight: '200'
  }

});
