import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import EmployeeDetailModal from './EmployeeDetailModal';
import LiquidateEmployeeModal from './LiquidateEmployeeModal';

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.updateDataSource = this.updateDataSource.bind(this);
    this.setProfileModalVisible = this.setProfileModalVisible.bind(this);
    this.setLiquidateEmployeeModalVisible = this.setLiquidateEmployeeModalVisible.bind(this);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      profileModalVisible: false,
      liquidateModalVisible: false,
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

  setProfileModalVisible(visible, employee = null) {
    this.setState({ 
      ...this.state, 
      profileModalVisible: visible,
      employee: employee
    });
  }

  setLiquidateEmployeeModalVisible(visible, employee = null) {
    this.setState({ 
      ...this.state, 
      liquidateModalVisible: visible,
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
            modalVisible={this.state.profileModalVisible}
            setModalVisible={this.setProfileModalVisible}
            employee={this.state.employee}
          />
          <LiquidateEmployeeModal
            modalVisible={this.state.liquidateModalVisible}
            setModalVisible={this.setLiquidateEmployeeModalVisible}
            employee={this.state.employee}
          />
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.state.dataSource}
            renderRow={data =>
              <ListItem>
                <Text> {data.name} {data.last_name} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full warning onPress={() => this.setProfileModalVisible(true, data)}>
                <Icon active name="eye" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full success onPress={() => this.setLiquidateEmployeeModalVisible(true, data)}>
                <Icon active name="calculator" />
              </Button>}
          />
        </Content>
      </Container>
    );
  }
}
