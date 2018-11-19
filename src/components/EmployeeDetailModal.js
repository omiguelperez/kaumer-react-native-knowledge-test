import React, { Component } from 'react';
import { Modal, StyleSheet, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import {
  Content, Icon, Button, Text, Card, CardItem, Body, List, ListItem, Left, Right
} from 'native-base';
import { getLiquidations } from '../api-client'
import Detail from './Detail'

export default class EmployeeDetailModal extends Component {
  constructor() {
    super();
    this.state = {
      employee: {
        name: '',
        last_name: ''
      },
      liquidations: [],
      results: false,
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.employee) {
      this.setState({
        ...this.state,
        results: false,
        employee: newProps.employee,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.employee.id && !this.state.results) {
      getLiquidations(this.state.employee.id)
        .then(liquidations => {
          this.setState({
            ...this.state,
            results: true,
            liquidations: liquidations
          })
        })
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
            closeModal={() => {
              this.setState({
                ...this.state,
                liquidations: []
              })
              this.props.setModalVisible(false);
            }}
            title={`${this.state.employee.name} ${this.state.employee.last_name}`}
          />
          <Content style={styles.container}>
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
                  <Text>{this.state.employee.phone_number}</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
          <Content style={[styles.liquidations, styles.container]}>
            {
              this.state.liquidations.length > 0 && <Text style={styles.liquidationsTitle}>
                Liquidaciones
              </Text>
            }
            {
              this.state.liquidations.map(liq => <Detail
                key={liq.id}
                detail={liq}
              />)
            }
          </Content>
        </Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileItem: {
    paddingRight: 0,
    marginRight: 0,
  },
  liquidationsTitle: {
    alignSelf: 'center',
    fontWeight: '600',
    marginVertical: 10,
  },
});