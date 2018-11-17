import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container, Content, List, ListItem, Text, Left, Button, Badge
} from 'native-base';

export default class SettingList extends Component {
  render() {
    return (
      <List>
        <ListItem itemHeader first>
          <Text>DINERO</Text>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Salario mínimo</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.basic_salary || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings} last>
          <Left style={styles.leftSettings}>
            <Text>Auxilio de transporte</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.transport_assistance || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={{ marginTop: 20 }} itemHeader first>
          <Text>PORCENTAJES</Text>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Vacaciones</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.holiday_percentage + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Cesantias</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.unemployment_percentage + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Intereses de Cesantias</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.unemployment_interest + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Prima de servicios</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.premium_services + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Salud</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.health_percentage + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Pensión</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.pension_percentage + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings}>
          <Left style={styles.leftSettings}>
            <Text>Riesgos Profesionales (Clase I)</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.occupational_hazards + '%' || ''}`}
              </Text>
            </Badge>
          </Content>
        </ListItem>
        <ListItem style={styles.itemSettings} last>
          <Left style={styles.leftSettings}>
            <Text>Aportes (Caja)</Text>
          </Left>
          <Content style={styles.contentSettings}>
            <Badge style={styles.item}>
              <Text style={styles.itemText}>
                {`${this.props.setting.cash_contributions + '%' || ''}`}
              </Text>
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
