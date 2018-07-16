import React, { Component } from 'react';
import { Text ,View } from 'react-native';
import styles from './styles'
import { connect } from 'react-redux';

//Component class
class TodaysView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Todays View</Text>
      </View>
       
    );
  }
}

const mapStateToProps=(state)=>{
  return{
     
  };
}

export default connect(mapStateToProps)(TodaysView);