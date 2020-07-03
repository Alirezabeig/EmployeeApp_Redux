import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';



class EmployeeApp extends Component {
  render (){
    return (
      <View style={styles.container}>
        <Text>Hello 00App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

function mapStateToProps (state){
  return {
    date : state
  }
}
function mapDispatchToProps (dispatch) {
  return {
    goodPerformance : id => dispatch ({
      type : "GOOD_PERFORMANCE",
      id : id
    }),
    badPerformance : id => dispatch ({
      type : "BAD_PERFORMANCE",
      id : id
    })
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
