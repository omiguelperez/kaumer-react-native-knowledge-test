import React, { Component } from 'react';
import { Modal, StyleSheet, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import {
  Content, Icon, Button, Text, Card, CardItem, Body, Right
} from 'native-base';

export default class EmployeeDetailModal extends Component {
  constructor() {
    super();
    this.state = {
      employee: {
        name: '',
        last_name: ''
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.employee && newProps.employee !== this.state.employee) {
      this.setState({
        ...this.state,
        employee: newProps.employee
      });
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Content>
          <ModalHeader
            closeModal={() => this.props.setModalVisible(false)}
            title={`${this.state.employee.name} ${this.state.employee.last_name}`}
          />
          <Content>
            <Card>
              <CardItem header>
                <Text>Perfil Empleado</Text>
              </CardItem>
              <CardItem style={styles.profileItem}>
                <Icon active name="person" />
                <Text>Cédula</Text>
                <Right>
                  <Text>{this.state.employee.person_number}</Text>
                </Right>
              </CardItem>
              <CardItem style={styles.profileItem}>
                <Icon active name="mail" />
                <Text>Correo</Text>
                <Right>
                  <Text>{this.state.employee.email}</Text>
                </Right>
              </CardItem>
              <CardItem style={styles.profileItem}>
                <Icon active name="logo-whatsapp" />
                <Text>Teléfono</Text>
                <Right>
                  <Text>{this.state.employee.person_number}</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  profileItem: {
    paddingRight: 0,
    marginRight: 0,
  },
});