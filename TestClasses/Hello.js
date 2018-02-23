import React from 'react';
import {View, Text, Button, Alert, Image, StyleSheet,} from 'react-native';

export default class Hello extends React.Component{
  render (){
    return (
      <View>
      <Image
      style={{width: 100, height: 100}}
      source={require('./cat.jpg')}
      />
      <Text style={styles.text}>Hello from Hello</Text>
      <Button
      onPress={() => {
        Alert.alert('You tapped the button!');
      }}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#ff00ed',
    textDecorationLine: 'underline',
},
});
