import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import { Form, Item, Label, Input, Content, Container, Icon } from 'native-base'
import { saveEmployee } from '../api-client'

export default class NewEmployeeModal extends Component {
  constructor() {
    super();
    this.saveEmployee = this.saveEmployee.bind(this);
    this.state = {
      employee: {}
    };
  }

  saveEmployee() {
    saveEmployee({ ...this.state.employee })
      .then(created => {
        this.props.setModalVisible(false);
        this.props.onSaveCallback();
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
        <Content>
          <ModalHeader
            closeModal={() => this.props.setModalVisible(false)}
            title="Nuevo empleado"
            saveOption={true}
            saveOptionCallback={this.saveEmployee}
          />
          <Form style={styles.form}>
            <Item style={[styles.formInput, styles.staticInput]} inlineLabel>
              <Label>Cédula</Label>
              <Input
                ref={component => this._person_number = component}
                onChangeText={(person_number) => this.setState({
                  ...this.state,
                  employee: {
                    ...this.state.employee,
                    person_number: person_number
                  }
                })}
                autoFocus
              />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]} inlineLabel>
              <Label>Nombre</Label>
              <Input
                ref={component => this._name = component}
                onChangeText={(name) => this.setState({
                  ...this.state,
                  employee: {
                    ...this.state.employee,
                    name: name
                  }
                })}
              />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]} inlineLabel>
              <Label>Apellidos</Label>
              <Input
                ref={component => this._last_name = component}
                onChangeText={(last_name) => this.setState({
                  ...this.state,
                  employee: {
                    ...this.state.employee,
                    last_name: last_name
                  }
                })}
              />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon name='keypad' />
              <Input
                placeholder="Teléfono"
                ref={component => this._phone_number = component}
                onChangeText={(phone_number) => this.setState({
                  ...this.state,
                  employee: {
                    ...this.state.employee,
                    phone_number: phone_number
                  }
                })}
              />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon active name='mail' />
              <Input
                placeholder="Correo"
                ref={component => this._email = component}
                onChangeText={(email) => this.setState({
                  ...this.state,
                  employee: {
                    ...this.state.employee,
                    email: email
                  }
                })}
              />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon active name='calculator' />
              <Input
                placeholder="Salario"
                ref={component => this._salary = component}
                onChangeText={(salary) => this.setState({
                  ...this.state,
                  employee: {
                    ...this.state.employee,
                    salary: salary
                  }
                })}
              />
            </Item>
          </Form>
        </Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20
  },
  formInput: {
    marginLeft: 0,
  },
  staticInput: {
    marginTop: 18,
  },
})