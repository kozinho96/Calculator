import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      resultText: "",
      calculationText: "0"
    }
    this.operations = ['AC','+','-','*','/']
  }

  calculateResult() {
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    }) 
  }

  validate() {
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
          return false
    }
    return true
  }

  buttonPressed(text) {
    
    if (text == '=') {
      return this.validate() && this.calculateResult()
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation) {
    switch(operation){
      case 'AC':
        this.setState({
          resultText: '',
          calculationText: '0'

      })
      break
    case '+':
    case '-':
    case '*':
    case '/':

        const lastChar = this.state.resultText.split('').pop()
        if (this.operations.indexOf(lastChar) > 0) return

        if(this.state.text == "") return
        this.setState({
          resultText: this.state.resultText + operation
        })
    
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
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(7)}>
                <Text style={styles.btntext}>7</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(8)}>
                <Text style={styles.btntext}>8</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(9)}>
                <Text style={styles.btntext}>9</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(4)}>
                <Text style={styles.btntext}>4</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(5)}>
                <Text style={styles.btntext}>5</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(6)}>
                <Text style={styles.btntext}>6</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(1)}>
                <Text style={styles.btntext}>1</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(2)}>
                <Text style={styles.btntext}>2</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(3)}>
                <Text style={styles.btntext}>3</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(0)}>
                <Text style={styles.btntext}>0</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('.')}>
                <Text style={styles.btntext}>.</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('AC')}>
                <Text style={styles.btntext}>AC</Text>
            </TouchableOpacity >
          </View>
          </View>
          <View style={styles.operations}>
          <TouchableOpacity style={styles.btn} onPress={() => this.operate('/')}>
                <Text style={[styles.btntext, styles.white]}>/</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('*')}>
                <Text style={[styles.btntext, styles.white]}>*</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('-')}>
                <Text style={[styles.btntext, styles.white]}>-</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.operate('+')}>
                <Text style={[styles.btntext, styles.white]}>+</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('=')}>
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
  empty: {
  },
  resultText: {
    fontSize: 40,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: '#6a6b6d',
    borderWidth: 1
  },
  btntext: {
    fontSize: 35,
    color: 'white'
  },
  white: {
    color: 'white'
  },
  calculationText: {
    fontSize: 34,
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
    backgroundColor: '#545559',
    justifyContent: "center",
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: '#545559',
    justifyContent: "center",
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#7d7e80',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#008000'
  },



});
