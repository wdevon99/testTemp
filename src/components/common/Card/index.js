import React from 'react';
import {StyleSheet,View } from 'react-native';

//functional component
const Card =(props)=> (
    <View style={styles.cardContainer}>
        {props.children}
    </View>
);

//styles
const styles=StyleSheet.create({
   cardContainer:{
       borderWidth:1,
       borderRadius:2,
       borderColor:'#ddd',
       borderBottomWidth:0,
       shadowColor:'#000',
       shadowOffset:{width :0 , height :1},
       shadowOpacity:0.1,
       shadowRadius:2,
       elevation:1,
       marginLeft:10,
       marginRight:10,
       marginTop:10
   }
});


export default Card;