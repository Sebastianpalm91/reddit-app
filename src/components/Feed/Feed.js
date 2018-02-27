import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ApiContent from '../Api/ApiContent';


export default class Feed extends Component{
  render (){
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('../../Images/RedditLogo.png')} style={{width: 40, height: 40}}/>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <ApiContent/>
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25}/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25}/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25}/>
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  navBar: {
    height: 65,
    backgroundColor: '#34495e',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#d9eafb',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 6,
  }


})
