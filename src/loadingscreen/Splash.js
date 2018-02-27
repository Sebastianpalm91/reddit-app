import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.logo}
            source={require('../Images/RedditLogo.png')}
          />
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
    alignItems: 'center',
    flex: 1,
    paddingBottom: 20
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20
  },
  logo: {
    width: 100,
    height: 100,
  },

});
