import React from 'react';
import {View, TextInput, StyleSheet, } from 'react-native';
import {Button, } from 'react-native-elements';

export default class QueryInput extends React.Component{
  render (){
    return (
      <View>
      <TextInput />
      <Button style = {styles.searchBar}
        title="Search"
        onPress={() => console.log('The button was pressed')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
  },
  containerStyle: {
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    
  }
});
