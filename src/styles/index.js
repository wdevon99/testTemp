import {StyleSheet} from 'react-native';
  
export const theme = {
    //main
    PRIMARY_COLOR: '#e96533',
    WHITE_COLOR:'#fff',
    //grey
    VERY_LIGHT_GREY: '#eaeaea',
    LIGHT_GREY: '#c4c4c4',
    GREY:'#919191',
    DARK_GREY:'#3d3d3d'
 
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    defaultPadding: {
        padding: 15
    }
});
