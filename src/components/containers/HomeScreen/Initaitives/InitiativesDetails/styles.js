import { StyleSheet } from 'react-native';
import {theme} from '../../../../../styles'

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'flex-start',
      backgroundColor:'white',
    },
    section:{
      padding:20,
      alignSelf:'stretch',
    },
    initiativeTitle:{
      fontSize:25,
      fontWeight:'bold',
      color:theme.DARK_GREY,
      paddingBottom:10,
    },
    dividerContainer:{
      alignSelf:'stretch',
      paddingLeft:20,
      paddingRight:20,
      paddingTop:2,
      paddingBottom:2,
      backgroundColor:theme.VERY_LIGHT_GREY,
    },
    dividerText:{
      color:theme.GREY
    }

  });

  export default styles;