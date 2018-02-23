import React from 'react';
import {View,
        FlatList,
        Text,
        Image,
        Button,
        } from 'react-native';

export default class ApiContent extends React.Component{
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=4GTOUVolpNMX9zDlgN2lRsz65ILvFmVL");
    const json = await response.json();
    this.setState({data: json.data});
  };
  render (){
    return (
      <View>
      <FlatList
      data={this.state.data}
      keyExtractor={(x, i) => i}
      renderItem={({item}) =>
         <Image
         style={{width: 100, height: 100}}
         source={{uri:`${item.images.original.url}`}}
         />
        // <Text>{item.url}</Text>
        // <Button
        // onPress={onPressLearnMore}
        // title="Learn More"
        // color="#841584"
        // accessibilityLabel="Learn more about this purple button"
        // />
      }
      />
      </View>
    );
  }
}
