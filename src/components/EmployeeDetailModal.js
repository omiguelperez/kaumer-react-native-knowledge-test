import React, { Component } from 'react';
import { Modal, StyleSheet, TouchableHighlight, View, Alert } from 'react-native';
import ModalHeader from '../components/ModalHeader';
import {
  Content, Icon, Button, Text, Card, CardItem, Body, List, ListItem, Left, Right
} from 'native-base';
import { getLiquidations } from '../api-client'
import Currency from 'react-currency-formatter';
import monthName from '../month'

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
              this.state.liquidations.map(liq => {
                return (
                  <Card key={liq.id}>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Fecha</Text>
                      </Left>
                      <Right>
                        <Text>
                          {monthName[liq.month]} de {liq.year}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Básico</Text>
                      </Left>
                      <Right>
                        <Text style={styles.default}>
                          {liq.basic && <Currency
                            quantity={liq.basic || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Aux. Transporte</Text>
                      </Left>
                      <Right>
                        <Text style={styles.add}>
                          {liq.transport_assistance && <Currency
                            quantity={liq.transport_assistance || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Salud</Text>
                      </Left>
                      <Right>
                        <Text style={styles.minus}>
                          {liq.health && <Currency
                            quantity={liq.health || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Pensión</Text>
                      </Left>
                      <Right>
                        <Text style={styles.minus}>
                          {liq.pension && <Currency
                            quantity={liq.pension || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Neto pagado</Text>
                      </Left>
                      <Right>
                        <Text style={styles.default}>
                          {liq.paid && <Currency
                            quantity={liq.paid || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Vacaciones</Text>
                      </Left>
                      <Right>
                        <Text>
                          {liq.holidays && <Currency
                            quantity={liq.holidays || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Cesantias</Text>
                      </Left>
                      <Right>
                        <Text>
                          {liq.unemployment && <Currency
                            quantity={liq.unemployment || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Int. de Cesantias</Text>
                      </Left>
                      <Right>
                        <Text>
                          {liq.unemployment_interest && <Currency
                            quantity={liq.unemployment_interest || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Prima de servicios</Text>
                      </Left>
                      <Right>
                        <Text>
                          {liq.premium_services && <Currency
                            quantity={liq.premium_services || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Riesgos profesionales</Text>
                      </Left>
                      <Right>
                        <Text>
                          {liq.occupational_hazards && <Currency
                            quantity={liq.occupational_hazards || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left style={styles.labelContainer}>
                        <Text style={styles.labelText}>Aportes a caja</Text>
                      </Left>
                      <Right>
                        <Text>
                          {liq.cash_contributions && <Currency
                            quantity={liq.cash_contributions || 0}
                            currency="COP"
                            pattern="##,### !"
                            decimal="."
                            group=","
                          />}
                        </Text>
                      </Right>
                    </CardItem>
                  </Card>
                )
              })
            }
          </Content>
        </Content>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    color: 'green',
  },
  minus: {
    color: 'red',
  },
  default: {
    color: 'gray',
  },
  container: {
    padding: 10,
  },
  profileItem: {
    paddingRight: 0,
    marginRight: 0,
  },
  labelText: {
    fontWeight: '600'
  },
  liquidationsTitle: {
    alignSelf: 'center',
    fontWeight: '600',
    marginVertical: 10,
  },
});