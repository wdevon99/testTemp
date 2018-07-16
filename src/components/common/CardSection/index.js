import React from 'react';
import {StyleSheet ,View } from 'react-native';

//functional component
const CardSection =(props)=> (
    <View style={styles.container}>
        {props.children}
    </View>
);

//styles
const styles=StyleSheet.create({
   container:{
       borderBottomWidth:1,
       padding:10,
       backgroundColor:'#fff',
       justifyContent:'flex-start',
       flexDirection:'row',
       borderColor:'#ddd',
       position:'relative'
   }
});


export default CardSection;