import React from 'react';
import {View,
        FlatList,
        Text,
        Image,
        Linking,
        } from 'react-native';

export default class ApiContent extends React.Component{
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=4GTOUVolpNMX9zDlgN2lRsz65ILvFmVL");
    const json = await response.json();
    this.setState({data: json.data});
  };
  render (){
    return (
      <FlatList
      data={this.state.data}
      keyExtractor={(x, i) => i}
      renderItem={({item}) =>
      <View>
         <Image
         style={{width: 100, height: 100}}
         source={{uri:`${item.images.original.url}`}}
         />
        <Text onPress={ ()=> Linking.openURL(`${item.images.original.url}`)} >Click here for source</Text>
        </View>
      }
      />
    );
  }
}
