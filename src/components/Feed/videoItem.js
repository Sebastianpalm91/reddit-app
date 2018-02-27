import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ApiContent from '../Api/ApiContent';

export default class VideItem extends Component{
  render (){
    let images = this.props.images;

    return (
      <View style={styles.container}>
        <ApiContent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
