import React from 'react';
import {StyleSheet ,Text ,TouchableOpacity} from 'react-native';
import {theme} from '../../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';


const IconButton =(props)=> (
    <TouchableOpacity style={styles.iconContainer} onPress={props.onButtonPressed}>
       <Icon name={props.name} size={25} color={props.color}/>
    </TouchableOpacity>
);

//styles
const styles=StyleSheet.create({
    iconContainer:{   
        padding:5,
        margin:5
    }
});


export default IconButton;