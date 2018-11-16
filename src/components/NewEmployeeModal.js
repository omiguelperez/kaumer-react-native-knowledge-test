import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import { Form, Item, Label, Input, Content, Container, Icon } from 'native-base'

export default class NewEmployeeModal extends Component {
  constructor () {
    super();
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  saveEmployee () {

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
              <Input />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]} inlineLabel>
              <Label>Nombre</Label>
              <Input />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]} inlineLabel>
              <Label>Apellidos</Label>
              <Input />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon name='keypad' />
              <Input placeholder='Teléfono' />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon active name='mail' />
              <Input placeholder='Correo' />
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