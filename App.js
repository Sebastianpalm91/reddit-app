import React from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
         SectionList,
       } from 'react-native';
// import NewSectionList from './NewSectionList';
import ViewSection from './ViewSection';
// import Hello from './Hello';
// import List from './List';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ViewSection />
      <ViewSection />
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
