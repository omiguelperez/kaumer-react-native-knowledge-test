import React, { Component } from 'react';
import Header from '../components/Header';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content, List, ListItem, Text, Left, Button, Badge
} from 'native-base';
import SettingList from '../components/SettingList';
import ConfigureSettings from '../components/ConfigureSettings';
import { getCurrentSetting } from '../api-client';


export default class SettingsScreen extends Component {
  constructor () {
    super();
    this.state = {
      setting: {},
      notfound: false
    };
  }
  
  componentDidMount() {
    getCurrentSetting()
      .then(setting => {
        this.setState({
          setting: setting
        });
      })
      .catch(err => {
        this.setState({
          setting: {},
          notfound: true
        })
      })
  }
  
  render() {
    return (
      <Container>
        <Header
          title="Configuración"
          {...this.props}
        />
        <Content style={styles.settingsContent}>
          { this.state.notfound && <ConfigureSettings /> }
          <SettingList 
            setting={this.state.setting}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  settingsContent: {
    paddingRight: 10,
  },
});
