import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
         SectionList,
         FlatList,
       } from 'react-native';
// import NewSectionList from './NewSectionList';
// import ViewSection from './ViewSection';
// import Hello from './Hello';
// import List from './List';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={[{name: 'Gabriel'}, {name: 'Sebastian'}]}
        keyExtractor={(x, i) => i }
        renderItem={({item}) => <Text>item.name}</Text>
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
    padding: 50,
  },
});
