import React from 'react';
import {View, TextInput, StyleSheet, } from 'react-native';
import {Button, } from 'react-native-elements';

export default class QueryInput extends React.Component{
  state = { term: ''};
  render (){
    return (
      <View style= {styles.containerStyle}>
      <TextInput style = {styles.searchTextStyle}
        onChangeText={term => this.setState({term})}
        value={this.state.term}
       />
      <Button style = {styles.buttonStyle}
        title="Search"
        onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10,
  },
  searchTextStyle: {
    flex: 1,
    borderBottomWidth: 2,
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8,
  }
});
