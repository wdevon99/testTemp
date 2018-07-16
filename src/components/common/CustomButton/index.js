import React from 'react';
import {StyleSheet ,Text ,TouchableOpacity} from 'react-native';
import {theme} from '../../../styles'


const CustomButton =(props)=> (
    <TouchableOpacity onPress={props.onButtonPressed}>
        <Text style={styles.btn} > {props.buttonName} </Text> 
    </TouchableOpacity>
);

//styles
const styles=StyleSheet.create({
    btn:{
        borderWidth:0,
        backgroundColor:theme.PRIMARY_COLOR,
        borderRadius:5,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        padding:10,
        margin:10     
    }
});


export default CustomButton;