import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import { Form, Item, Label, Input, Content, Button } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

const monthName = {
  10: 'Octubre',
  11: 'Noviembre'
}

export default class LiquidateEmployeeModal extends Component {
  constructor() {
    super();
    this.state = state = {
      year: new Date().getFullYear(),
      month: monthName[new Date().getMonth() + 1],
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
                keyboardType="numeric"
                placeholder="Días trabajados" />
            </Item>
            <Button style={styles.button} success>
              <Text style={styles.buttonText}>Liquidar</Text>
            </Button>
          </Form>
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