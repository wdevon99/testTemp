import React from 'react'
import NavigationService from '../NavigationService'
import IconButton from '../../common/IconButton'

export const LogOutButton=()=>(
    <IconButton 
        name='sign-out'
        color="white"
        onButtonPressed={()=>{
            NavigationService.navigate('Auth');
        }
        }
    />
);
