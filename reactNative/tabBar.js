'use strict';

var React = require('react-native');
var NypK2QYh = require('./NypK2QYh.js');
var BioPage = require('./BioPage.js');
var TestApp = require('./TestApp.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'favorites'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view7Tabbarios8]}
        >
        <TabBarIOS.Item 
        systemIcon='favorites'
        selected={this.state.selectedTab === 'favorites'}
        onPress={() => {
          this.setState({
            selectedTab: 'favorites',
          });
        }}>
        <NypK2Qyh />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='search'
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        <BioPage />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='recents'
        selected={this.state.selectedTab === 'recents'}
        onPress={() => {
          this.setState({
            selectedTab: 'recents',
          });
        }}>
        <NypK2Qyh />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='recents'
        selected={this.state.selectedTab === 'recents'}
        onPress={() => {
          this.setState({
            selectedTab: 'recents',
          });
        }}>
        <TestApp />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
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
});
