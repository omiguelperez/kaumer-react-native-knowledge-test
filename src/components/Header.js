import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Title, Icon } from 'native-base';

export default class NominaHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            onPress={() => this.props.navigation.toggleDrawer()}
            transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
