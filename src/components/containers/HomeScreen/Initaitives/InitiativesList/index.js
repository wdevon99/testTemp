import React, { Component } from 'react';
import {View ,Text ,ScrollView ,TouchableOpacity} from 'react-native';
import styles from './styles'
import {theme} from '../../../../../styles'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
//components
import Card from '../../../../common/Card';
import CardSection from '../../../../common/CardSection'
import CustomTextInput from '../../../../common/CustomTextInput'
import {SearchBar , List, ListItem } from 'react-native-elements'



//Component class
class InitiativesList extends Component {
  //navigation config for this screen
  static navigationOptions={
    title:"Initiatives"
  }


  //FOR TESTING
  allInitiativesArray=["CSR","People Development","Social Media","Uni Relations","CSR","People Development","Social Media","Uni Relations","CSR","People Development","Social Media","Uni Relations","CSR","People Development","Social Media","Uni Relations"];


  //onPress methods
  onInitiativeSelected=(initiative)=>{
    const {navigate}=this.props.navigation;
    navigate('InitiativesDetails',{initiative:initiative});

  }

  render() {
    return (
      <View style={styles.container}> 

        <SearchBar
          lightTheme
          placeholder='search' 
          inputStyle={{backgroundColor:theme.VERY_LIGHT_GREY}}
          containerStyle={{backgroundColor:theme.WHITE_COLOR}}
        />

        <ScrollView>
          <List containerStyle={{marginTop:-4}}>
            {
              this.allInitiativesArray.map((initiative, i) => (
                <TouchableOpacity key={i} onPress={()=>{this.onInitiativeSelected(initiative)}}> 
                  <ListItem
                    title={initiative}
                    // leftIcon={{name:'hashtag' ,type:"font-awesome"}}
                  />
                </TouchableOpacity>
              ))
            }
          </List>
        </ScrollView>
      </View>      
    );
  }
}

const mapStateToProps=(state)=>{
  return{
     
  };
}

export default connect(mapStateToProps)(InitiativesList);




// <FlatList
// data={this.allInitiativesArray}
// renderItem={({item}) =><CardSection>{item}</CardSection>}
// />

  


