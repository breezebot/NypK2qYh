'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Image
                	source={{uri: 'https://scontent-lga1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/390469_103735846412710_468610899_n.jpg?oh=c08c11408e17d55d11c05431a3f9efdb&oe=5683D084'}} resizeMode='cover' 
                	style={[styles.view1Image2]}>
                </Image>
            </View>
            <View style={[styles.view3]}>
                <Text 
                	style={[styles.view3Navbar4]}>
                	Cooper's Bio
                </Text>
            </View>
            <View style={[styles.view5]}>
                <Text 
                	style={[styles.view5Text6]}>
                	I am a dog
                </Text>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view1Image2:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: NaN,
      }, 
      view3:{
      }, 
      view3Navbar4:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          color: '#ff8ad8',
          width: 375,
          height: NaN,
      }, 
      view5:{
      }, 
      view5Text6:{
          paddingLeft: 86,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 375,
          height: NaN,
      }, 
      view7:{
      }, 
      view7Tabbarios8:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
      }, 
})



