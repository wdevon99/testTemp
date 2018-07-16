import { StyleSheet} from 'react-native';
import {theme} from '../../../styles'

const styles=StyleSheet.create({
    containers:{
        flex:1,
        padding:20,
        backgroundColor:theme.WHITE_COLOR,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainers:{
        alignItems:'center'
    },
    loginFormContainer:{
        // justifyContent:'space-around'
    },
    mainText:{
        fontSize:14,
        padding:5,
        fontWeight:'normal',
        color:theme.PRIMARY_COLOR,
        justifyContent:'center'
    },
    textInput:{
        backgroundColor:theme.VERY_LIGHT_GREY,
        marginLeft:14,
        marginRight:14,
        marginBottom:5,
        maxWidth:320,
        minWidth:310,
        padding:14,
        borderRadius:2,
        textAlign:'center'
    },
    errorMessage:{
        color:'red',
        fontWeight:'bold',
        textAlign:'center',
        padding:10,
        maxWidth:320
    },
    loaderContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        height:30,
    }
});

export default styles;