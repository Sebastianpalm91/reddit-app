
import React from 'react';
import {View, SectionList, Text, } from 'react-native';

export default class NewSectionList extends React.Component{
  renderItem = (row) => {
    return (
      <Text>{"item " + row.item.key)}</Text>
    );
  }
  renderSectionHeader = (row) => {
    invariant(row.section.key, "should be set");
    return (
      <Text>{"header " + row.section.key)}</Text>
    );
  }
  renderSectionFooter = (row) => {
    invariant(row.section.key, "should be set");
    return (
      <Text>{"footer " + row.section.key)}</Text>
    );
  }
  render() {
    const sectionListData = [
      { data: [ { key: "item1" }, { key: "item2" } ], key: "section1" },
      { data: [ { key: "item3" } ], key: "section2" },
      { data: [ ], key: "section3" }, // empty section
      { data: [ { key: "item4" }, { key: "item5" } ], key: "section4" },
    ];
    return (
      <SectionList
        sections={sectionListData}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        renderSectionFooter={this.renderSectionFooter}
      />
    );
  }
}
