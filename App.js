import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
         SectionList,
       } from 'react-native';


import SectionLists from './SectionLists';
// import Hello from './Hello';
// import List from './List';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        getItemLayout={this.getItemLayout}
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
