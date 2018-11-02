import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
    }

  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.empty}>
            </TouchableOpacity >
            <TouchableOpacity style={styles.empty}>
            </TouchableOpacity >
            <TouchableOpacity style={styles.empty}>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>7</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>8</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>9</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>4</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>5</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>6</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>1</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>2</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>3</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>0</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>.</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>AC</Text>
            </TouchableOpacity >
          </View>
          </View>
          <View style={styles.operations}>
          <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>/</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>*</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>-</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>+</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btntext, styles.white]}>=</Text>
            </TouchableOpacity >
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 30,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btntext: {
    fontSize: 30
  },
  white: {
    color: 'white'
  },
  calculationText: {
    fontSize: 24,
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: "center",
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  },



});
