import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import SetConfigurationModal from '../components/SetConfigurationModal';

export default class ConfigureSettings extends Component {
  state = {
    modalVisible: false,
    employees: []
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
      <View>
        <SetConfigurationModal
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
        />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            onPress={() => {
              this.setModalVisible(true);
            }}
            style={styles.configureSettingButton}>
            <Text>Configurar año</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  configureSettingButton: {
    alignSelf: 'flex-end',
    marginVertical: 10
  },
});
