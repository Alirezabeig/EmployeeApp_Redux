import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class EmployeeApp extends Component {
  render (){
    return (
      <View style={styles.container}>
        <Text>Helloss App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}
export default EmployeeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
