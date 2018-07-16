// @flow
import React from 'react';
import { createBottomTabNavigator ,createDrawerNavigator, createSwitchNavigator ,createStackNavigator } from "react-navigation";

// the components
import LoginScreen from '../containers/LoginScreen';
import InitiativesList from '../containers/HomeScreen/Initaitives/InitiativesList'
import InitiativesDetails from '../containers/HomeScreen/Initaitives/InitiativesDetails'
import TodaysViewTab from '../containers/HomeScreen/TodaysView';
import NotificationsTab from '../containers/HomeScreen/Notifications';

// Navigation Options configurations
import {mainDrawerNavigationOptions,initiativesStackNavigationOptions,homeTabNavigationOptions,authStackNavigationOptions , appStackNavigationOptions} from './NavigationOptions';

  
//stack navigators
const AuthStack = createStackNavigator({
        Login: LoginScreen 
    },
    authStackNavigationOptions
);
const InitiativesStack = createStackNavigator({
        AllInitiatives:InitiativesList,
        InitiativesDetails: InitiativesDetails,
    },
    initiativesStackNavigationOptions 
);

//Stack Navigator with embedded Tab Navigator
const AppStack = createStackNavigator({
            Home: createBottomTabNavigator({
                Initaitives:InitiativesStack,
                TodaysView:TodaysViewTab ,
                Notifications:NotificationsTab
            },
            homeTabNavigationOptions
        )
    },
    appStackNavigationOptions  
);

// //Drawer
// const MainDrawerNavigator = createDrawerNavigator({
//     },
//     mainDrawerNavigationOptions
// );


//Main stack navigator
export default AppNavigation = createSwitchNavigator({
    Auth : AuthStack ,
    App :AppStack
});

 


