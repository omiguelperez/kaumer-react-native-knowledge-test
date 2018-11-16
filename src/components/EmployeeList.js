import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import EmployeeDetailModal from './EmployeeDetailModal';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.updateDataSource = this.updateDataSource.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      modalVisible: false,
      employee: null,
      dataSource: this.ds,
    };
  }

  componentDidMount () {
    this.updateDataSource(this.props.employees);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.employees !== this.props.employees) {
      this.updateDataSource(newProps.employees);
    }
  }

  setModalVisible(visible, employee = null) {
    this.setState({ 
      ...this.state, 
      modalVisible: visible,
      employee: employee
    });
  }

  updateDataSource(data) {
    this.setState({
      ...this.state,
      dataSource: this.state.dataSource.cloneWithRows(data),
    });
  }

  render() {
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
            dataSource={this.state.dataSource}
            renderRow={data =>
              <ListItem>
                <Text> {data.name} </Text>
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
