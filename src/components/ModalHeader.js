import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Title, Icon, Text } from 'native-base';

export default class ModalHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            onPress={this.props.closeModal}
            transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          {
            this.props.saveOption && <Button
              onPress={this.props.saveOptionCallback}
              transparent hasText>
              <Text>Guardar</Text>
            </Button>
          }
        </Right>
      </Header>
    );
  }
}
