import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator, DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Text>Home page!</Text>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="DrawerOpen"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="DrawerOpen"
        />
      </View>
    );
  }
}


export default DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  drawerPosition: 'left',
  initialRouteName: 'Home',
  drawerWidth: 200
});
