import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content, List, ListItem, Text, Left, Button, Badge
} from 'native-base';

export default class SettingList extends Component {
  render() {
    return (
      <List>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Salario mínimo</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>750.200</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Auxilio de transporte</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>88.200</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Vacaciones</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>4.2%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Cesantias</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>9.33%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Intereses de Cesantias</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>1%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Prima de servicios</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>9.30%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Salud</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>8.5%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Pensión</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>12%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Riesgos Profesionales (Clase I)</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>0.522%</Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings} last>
          <Left style={styles.leftSettings}>
            <Text>Aportes (Caja)</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>4%</Text>
            </Badge>
          </Content>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent'
  },
  itemSettings: {
    flex: 1,
  },
  itemText: {
    color: 'gray',
    marginTop: 2,
  },
  leftSettings: {
    flex: 2,
  },
  contentSettings: {
    flex: 2,
  },
  rightSettings: {
    flex: .3,
  },
});
