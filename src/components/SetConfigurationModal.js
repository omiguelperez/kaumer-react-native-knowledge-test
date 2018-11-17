import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import { Form, Item, Label, Input, Content, Container } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

export default class SetConfigurationModal extends Component {
  state = {
    year: new Date().getFullYear()
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
            title="Configurando..."
            saveOption={true}
            saveOptionCallback={this.saveEmployee}
          />
          <View style={styles.yearContainer}>
            <Text style={styles.yearText}>{ this.state.year }</Text>
          </View>
          <Form style={styles.form}>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={styles.icon}
                name="ios-cash"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Salario mínimo" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={styles.icon}
                name="ios-cash"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Auxliio de transporte" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Vacaciones" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Cesantias" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Intereses de Cesantias" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Prima de servicios" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Salud" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Pensión" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Riesgos Profesionales (Clase I)" />
            </Item>
            <Item style={[styles.formInput, styles.staticInput]}>
              <Icon
                style={[styles.icon, styles.percentageIcon]}
                name="ios-calculator"
                size={30}
                color="#000" />
              <Input
                keyboardType="numeric"
                placeholder="Aportes (Caja)" />
            </Item>
          </Form>
        </Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
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
  }
})