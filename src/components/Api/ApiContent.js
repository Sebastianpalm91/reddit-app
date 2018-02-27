import React from 'react';
import {View,
        FlatList,
        Text,
        Image,
        Linking,
        StyleSheet,
        TouchableOpacity,
        } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
// giphy api
// http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=4GTOUVolpNMX9zDlgN2lRsz65ILvFmVL
// source={{uri:`${item.images.original.url}`}}
// onPress={ ()=> Linking.openURL(`${item.images.original.url}`)}
// reddit api
//  source={{uri:`${item.data.children.data.preview.images.source.url}`}}
// onPress={ ()=> Linking.openURL(`${item.images.original.url}`)}
// Acces token
//https://www.reddit.com/api/v1/authorize?client_id=ElDMK5FwhyyryA&response_type=code&state=snip&redirect_uri=https://github.com/Sebastianpalm91/reddit-app&duration=temporary&scope=identity+read
// test json
// https://www.reddit.com/r/funny/.json?limit=1
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
    let data = this.props.data;
    return (
      <FlatList
      data={this.state.data}
      keyExtractor={(x, i) => i}
      ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: '#797979'}}/>}
      renderItem={({item}) =>
      <View style={styles.feedItem}>
         <Image
         style={{height: 100}}
         source={{uri:`${item.images.original.url}`}}
         onPress={ ()=> Linking.openURL(`${item.images.original.url}`)}

         />
       <View style={styles.descContainer}>
         <Image source={{uri: 'https://randomuser.me/api/portraits/women/88.jpg' }} style={{height: 50, width: 50, borderRadius: 25}}/>
         <View style={styles.details}>

           <Text style={styles.detailsTitle}>TITLE GOES HERE</Text>
           <Text style={styles.detailsStats}>AUTHOR · nFormatter(STATS GOESE HERE,1) </Text>
         </View>
         <TouchableOpacity>
           <Icon name="more-vert" size={20} color={"#797979"}/>
         </TouchableOpacity>
       </View>
      </View>
      }
      />
    );
  }
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' upvotes';
}

const styles = StyleSheet.create({
  feedItem: {
    flex: 1,
    padding: 15,
  },
  descContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  detailsTitle: {
    fontSize: 16,
    color: '#222222',
  },
  details: {
    paddingHorizontal: 15,
    flex: 1,
  },
  detailsStats: {
    fontSize: 14,
    paddingTop: 3,
    color: '#636363',
  }
})
