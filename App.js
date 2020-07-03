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
};
const reducer = (state : initialState , action ) => {

  let inititialSalary;
  let incremnet;
  let newSalary;
  let employeeObj;

if (action.id) {
  inititialSalary = state[action.id].emSalary;
  incremnet = (inititialSalary/100) * 20;
}

  switch (action.type) {
    case "GOOD_PERFORMANCE":
     newSalary = inititialSalary + incremnet
     employeeObj = state[action.id];
     employeeObj.empSalary = newSalary
     return Object.assign({}, state)

     case "BAD_PERFORMANCE":
      newSalary = inititialSalary - incremnet
      employeeObj = state[action.id];
      employeeObj.empSalary = newSalary
      return Object.assign({}, state)

  }
  return state
}

const store = createStore(reducer);

class App extends Component {
  render (){
    return (
      <Provider store= {store}>
        <EmployeeApp/>
      </Provider>
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
