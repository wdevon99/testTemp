import React, { Component } from 'react';
import { Text ,View} from 'react-native';
import styles from './styles'
import { connect } from 'react-redux';

//Component class
class Notifications extends Component {

  navigationOptions={
    tabBarLabel:"lala"
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Notifications</Text>
      </View>
       
    );
  }
}

const mapStateToProps=(state)=>{
  return{
     
  };
}

export default connect(mapStateToProps)(Notifications);