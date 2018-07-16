import React from 'react'
import { Image } from 'react-native';
import { LogOutButton , DrawerButton} from './HeaderButtons'
import {theme} from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome';

//Tab naviagations options
export const homeTabNavigationOptions={
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            //Setting the icon for the tabs
            if (routeName === 'Initaitives') {
                return  <Icon name="list-alt" size={25} color={theme.LIGHT_GREY}/>;
            }else if (routeName === 'TodaysView') {
                return <Image style={{width:35,height:35}} source={require('../../../assets/icons/xLogoIcon.png')}/>;
            } else if (routeName === 'Notifications') {
                return  <Icon name="bell" size={25} color={theme.LIGHT_GREY}/>;
            }
        }
    }),
    tabBarOptions: {
        activeTintColor: theme.LIGHT_GREY,
        activeBackgroundColor:theme.VERY_LIGHT_GREY,
        inactiveTintColor: theme.LIGHT_GREY,
    }
}

//Stack naviagations options
export const authStackNavigationOptions={
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
export const initiativesStackNavigationOptions={
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}

export const appStackNavigationOptions={
    navigationOptions:{
        title:"Bonfire",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor:theme.PRIMARY_COLOR
        },
        headerRight:<LogOutButton/>,
    }
}

//Drawer naviagations options
export const mainDrawerNavigationOptions={
    navigationOptions: {
        drawerLabel: 'Login'
    }
}