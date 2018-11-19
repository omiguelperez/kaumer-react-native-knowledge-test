import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import { Form, Item, Label, Input, Content, Button } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { liquidateEmployee } from '../api-client'
import monthName from '../month'
import { verify } from '../api-client'
import Detail from './Detail';

export default class LiquidateEmployeeModal extends Component {
  constructor() {
    super();
    this.liquidate = this.liquidate.bind(this)
    this.state = state = {
      year: new Date().getFullYear(),
      month: monthName[new Date().getMonth() + 1],
      worked_days: 0,
      employee: {
        id: '',
        name: '',
        last_name: '',
      },
      is_liquidated: false,
      detail: {}
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.employee) {
      this.setState({
        ...this.state,
        is_liquidated: false,
        detail: {},
        employee: newProps.employee
      });

      verify(newProps.employee.id)
        .then(response => {
          this.setState({
            ...this.state,
            is_liquidated: response.is_liquidated,
            detail: response.detail
          });
        })
    }
  }

  liquidate() {
    liquidateEmployee({
      worked_days: this.state.worked_days,
      employee_id: this.state.employee.id
    })
      .then(created => {
        this.setState({
          ...this.state,
          detail: {},
          is_liquidated: false
        })
        this.props.setModalVisible(false)
      })
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
        <ModalHeader
          closeModal={() => this.props.setModalVisible(false)}
          title={`${this.state.employee.name} ${this.state.employee.last_name}`}
        />
        <View style={styles.yearContainer}>
          <Text style={styles.yearText}>
            {this.state.month} de {this.state.year}
          </Text>
        </View>
        <Content>
          {
            !this.state.is_liquidated && this.state.detail != {} && (
              <Form style={styles.form}>
                <Item disabled style={[styles.formInput, styles.staticInput]}>
                  <Icon style={styles.salaryIcon} name='ios-contact' size={30} />
                  <Label>Cédula</Label>
                  <Input
                    disabled
                    keyboardType="numeric"
                    placeholder="Cédula"
                    value={`${this.state.employee.person_number}`}
                  />
                </Item>
                <Item disabled style={[styles.formInput, styles.staticInput]}>
                  <Icon style={styles.salaryIcon} name='ios-alert' size={30} />
                  <Label>Salario básico</Label>
                  <Input
                    disabled
                    keyboardType="numeric"
                    placeholder="Salario empleado"
                    value={`${this.state.employee.salary}`}
                  />
                </Item>
                <Item style={[styles.formInput, styles.staticInput]}>
                  <Icon
                    style={styles.icon}
                    name="ios-bicycle"
                    size={30}
                    color="#000" />
                  <Input
                    autoFocus
                    ref={component => this._last_name = component}
                    keyboardType="numeric"
                    placeholder="Días trabajados"
                    onChangeText={(worked_days) => this.setState({
                      ...this.state,
                      worked_days: worked_days
                    })}
                  />
                </Item>
                <Button
                  onPress={this.liquidate}
                  style={styles.button}
                  success>
                  <Text style={styles.buttonText}>Liquidar</Text>
                </Button>
              </Form>
            )
          }
          {this.state.is_liquidated && (
            <Detail
              detail={this.state.detail}
            />
          )}
        </Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
  },
  form: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  formInput: {
    marginLeft: 0,
  },
  icon: {
    marginRight: 10,
  },
  percentageIcon: {
    marginHorizontal: 10,
  },
  staticInput: {
    marginTop: 18,
  },
  yearContainer: {
    paddingVertical: 10,
  },
  yearText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'gray',
  },
  salaryIcon: {
    marginRight: 20,
  },
})