import React, { Component } from 'react';
import Header from '../components/Header';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content, List, ListItem, Text, Left, Button, Badge
} from 'native-base';
import SettingList from '../components/SettingList';
import ConfigureSettings from '../components/ConfigureSettings';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Configuración"
          {...this.props}
        />
        <Content style={styles.settingsContent}>
          <ConfigureSettings />
          <SettingList />
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
