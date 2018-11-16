import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import { Form, Item, Label, Input, Content, Container, Icon } from 'native-base'

export default class EmployeeDetailModal extends Component {
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
            title={this.props.employee}
          />
          <Text>Detail modal buenas! </Text>
        </Content>
      </Modal>
    );
  }
}
