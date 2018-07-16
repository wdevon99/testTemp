//@flow
import React from 'react';
import {StyleSheet,View ,TextInput} from 'react-native';

const CustomTextInput =(props)=> (
    <View>
        <TextInput
            style={styles.textInput}
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={(text) => this.props.onChangeFuction(text)}
            underlineColorAndroid='rgba(0,0,0,0)'
            secureTextEntry={props.secureTextEntry}
        />
    </View> 
);

//styles
const styles=StyleSheet.create({
      textInput:{
          backgroundColor:'#dbdbdb',
          margin:10,
          fontSize:16,
          padding:10,
          borderRadius:3,
          textAlign:'center',
          alignSelf: 'stretch'
      }
});


export default CustomTextInput;