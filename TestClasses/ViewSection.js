import React from 'react';
import SectionLists from './SectionLists';
import {View, SectionList ,Text, StyleSheet, } from 'react-native';

export default class ViewSection extends React.Component{
  render (){
    return (
      <SectionList
        sections= {[
          {title: 'D', data: ['Devin']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          {data: ['Gabriel'], renderItem: 6},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        getItemLayout={this.getItemLayout}
      />
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
