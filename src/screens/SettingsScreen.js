import React, { Component } from 'react';
import Header from '../components/Header';
import { Container } from 'native-base';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Configuración"
          {...this.props}
        />
      </Container>
    );
  }
}