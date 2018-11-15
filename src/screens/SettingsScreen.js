import React, { Component } from 'react';
import Header from '../components/Header';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Badge } from 'native-base';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Configuración"
          {...this.props}
        />
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>ANUALES</Text>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Salario mínimo</Text>
              </Left>
              <Content>
                <Badge style={styles.item}>
                  <Text style={styles.itemText}>750.200</Text>
                </Badge>
              </Content>
              <Right>
                <Icon
                  onPress={() => alert('editando salario mínimo')}
                  name="settings"
                />
              </Right>
            </ListItem>
            <ListItem last>
              <Left>
                <Text>Auxilio de transporte</Text>
              </Left>
              <Content>
                <Badge style={styles.item}>
                  <Text style={styles.itemText}>88.200</Text>
                </Badge>
              </Content>
              <Right>
                <Icon
                  onPress={() => alert('eidtando auxilio de transporte')}
                  name="settings"
                />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent'
  },
  itemText: {
    color: 'gray',
    marginTop: 2,
  },
});
