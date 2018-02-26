import React, { Component } from 'react';
import { StyleSheet, View, Image,} from 'react-native';

export default class Feed extends Component{
  render (){
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('../../Images/RedditLogo.png')} style={{width: 40, height: 40}}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 65,
    backgroundColor: '#34495e',
    elevation: 3,
    paddingTop: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  }
})
