import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Text, Card, CardItem, Left, Right } from 'native-base';
import Currency from 'react-currency-formatter';
import monthName from '../month'

export default class Detail extends Component {
  render() {
    return (
      <Card key={this.props.detail.id}>
        <CardItem>
          <Left style={styles.labelContainer}>
            <Text style={styles.labelText}>Fecha</Text>
          </Left>
          <Right>
            <Text>
              {monthName[this.props.detail.month]} de {this.props.detail.year}
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left style={styles.labelContainer}>
            <Text style={styles.labelText}>Básico</Text>
          </Left>
          <Right>
            <Text style={styles.default}>
              {this.props.detail.basic && <Currency
                quantity={this.props.detail.basic || 0}
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
              {this.props.detail.transport_assistance && <Currency
                quantity={this.props.detail.transport_assistance || 0}
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
              {this.props.detail.health && <Currency
                quantity={this.props.detail.health || 0}
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
              {this.props.detail.pension && <Currency
                quantity={this.props.detail.pension || 0}
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
              {this.props.detail.paid && <Currency
                quantity={this.props.detail.paid || 0}
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
              {this.props.detail.holidays && <Currency
                quantity={this.props.detail.holidays || 0}
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
              {this.props.detail.unemployment && <Currency
                quantity={this.props.detail.unemployment || 0}
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
              {this.props.detail.unemployment_interest && <Currency
                quantity={this.props.detail.unemployment_interest || 0}
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
              {this.props.detail.premium_services && <Currency
                quantity={this.props.detail.premium_services || 0}
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
              {this.props.detail.occupational_hazards && <Currency
                quantity={this.props.detail.occupational_hazards || 0}
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
              {this.props.detail.cash_contributions && <Currency
                quantity={this.props.detail.cash_contributions || 0}
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
  labelText: {
    fontWeight: '600'
  },
});