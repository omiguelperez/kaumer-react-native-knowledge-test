import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import EmployeeDetailModal from './EmployeeDetailModal';

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      modalVisible: false,
      employee: null
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible, employee = null) {
    this.setState({ 
      ...this.state, 
      modalVisible: visible,
      employee
    });
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Content>
          <EmployeeDetailModal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            employee={this.state.employee}
          />
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => this.setModalVisible(true, data)}>
                <Icon active name="eye" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full success onPress={_ => alert(data)}>
                <Icon active name="calculator" />
              </Button>}
          />
        </Content>
      </Container>
    );
  }
}
