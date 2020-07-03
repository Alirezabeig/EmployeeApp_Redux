import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import EmployeeApp from './component/EmployeeApp'


const initialState ={
  1: {
    emId: 1,
    emName: "Jason",
    emSalary: 100000,
  },
  2: {
    emId: 2,
    emName: "Lora",
    emSalary: 200000,
  },
  3: {
    emId: 3,
    emName: "Bora",
    emSalary: 120000,
  },
  4: {
    emId: 4,
    emName: "Fally",
    emSalary: 145000,
  },
  5: {
    emId: 5,
    emName: "Kate",
    emSalary: 300000,
  }
}

class App extends Component {
  render (){
    return (
      <View style={styles.container}>
        <Text>Hlloss App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
