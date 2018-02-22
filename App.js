import React from 'react';
import { AppRegistry,
   StyleSheet, Text, View, SectionList, } from 'react-native';
// import Hello from './Hello';
// import List from './List';
import {sectionListData} from './sectionListData';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <SectionList
          renderItem={({ item, index }) => {
            return(<SectionListItem item={item} index={index}>
            </SectionListItem>);
          }}
          renderSectionHeader={({section}) => {

          }}
          >
        </SectionList>
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
