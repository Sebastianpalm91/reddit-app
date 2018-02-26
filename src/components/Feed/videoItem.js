import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Feed extends Component{
  render (){
    let video = this.props.video;
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
