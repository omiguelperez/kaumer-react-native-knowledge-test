import React, { Component } from 'react';
import Header from '../components/Header'
import { Container } from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Empleados"
          {...this.props}
        />
      </Container>
    );
  }
}
