import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {Card, Icon} from 'native-base';



class EmployeeApp extends Component {
  render (){
    return (
      <View>
      <FlatList

      data = {(this.props.data)}

      renderItem = { ({item}) => (
          <Card style = { styles.container}>
            <View>
             <Text>{item.emId}</Text>
            </View>

            <View>
              <Text>
              Name: {item.emSalary}
              </Text>

                <Text>
                Salary: {item.emSalary}
                </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress = { () => {
                  this.props.badPerformance(item.emid)
                }}
                >
                <Icon
                ios = "ios-thumps-down"
                android = "md-thumbs-down"
                style = { styles.badPerformance}
                />
              </TouchableOpacity>


              <TouchableOpacity
                onPress = { () => {
                  this.props.goodPerformance(item.emid)
                }}
                >
                <Icon
                ios = "ios-thumps-down"
                android = "md-thumbs-down"
                style = { styles.badPerformance}
                />
              </TouchableOpacity>
            </View>


          </Card>
      )}
      keyExtractor = {item => item.emId.toString()}
      >

      </FlatList>
        </View>
    );
  }

}

function mapStateToProps (state){
  return {
    data : state
  };
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
