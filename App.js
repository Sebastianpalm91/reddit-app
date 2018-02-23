import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
         SectionList,
         FlatList,
         Image,
       } from 'react-native';

// import NewSectionList from './NewSectionList';
// import ViewSection from './ViewSection';
// import Hello from './Hello';
// import List from './List';



export default class App extends React.Component {

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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
           // <Image
           // style={{width: 100, height: 100}}
           // source={{uri:`${'item.images.original.url'}`}}
           // />
          <Text>{item.images.original.url}</Text>
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
