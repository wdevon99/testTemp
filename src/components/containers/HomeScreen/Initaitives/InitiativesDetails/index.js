import React, { Component } from 'react';
import styles from './styles'
import { connect } from 'react-redux';
import { Text , View } from 'react-native';

//Component class
class InitiativesDetails extends Component {
  //navigation config for this screen
  static navigationOptions={
    title:"Initiatives Details"
  }

  selectedInitiative = this.props.navigation.getParam('initiative', 'initiative');
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.initiativeTitle} >{this.selectedInitiative}</Text>
          <Text >Leads</Text>
        </View>

        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText} >Activities</Text>
        </View>
        
        <View style={[styles.section,{flex:1}]}>
          <Text>{this.selectedInitiative}</Text>
        </View>
      </View>      
    );
  }
}

const mapStateToProps=(state)=>{
  return{
     
  };
}

export default connect(mapStateToProps)(InitiativesDetails);