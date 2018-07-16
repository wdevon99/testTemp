import React from 'react';
import {StyleSheet,Text,View , ActivityIndicator} from 'react-native';


const Loader =(props)=> (
    <View style={styles.loader}>
        <ActivityIndicator size={props.size||'small'} color="black"/>
    </View>
);


//styles
const styles=StyleSheet.create({
    loader:{
        justifyContent:'center',
        alignItems:'center'
    }
  
});


export default Loader;