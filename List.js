import React from 'react';
import { FlatList, Text,} from 'react-native';

export default class List extends React.Component{
  render (){
    return (
        <FlatList
          data={[{key: 'bajs'}, {key: 'kiss'}, {key: 'bajskiss'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
    );
  }
}
