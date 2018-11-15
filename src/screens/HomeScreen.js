import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../components/Header'
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import { Container, Content, Button, Fab, Icon } from 'native-base';
import NewEmployeeModal from '../components/NewEmployeeModal';

export default class HomeScreen extends Component {
  state = {
    modalVisible: false
  };

  constructor() {
    super();
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    return (
      <Container>
        <Header
          title="Empleados"
          {...this.props}
        />
        <View style={styles.content}>
          <NewEmployeeModal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
          />
          <Fab
            style={styles.fab}
            position="bottomRight"
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  fab: {
    backgroundColor: '#5067FF',
  },
})