import NavigationService from '../components/navigation/NavigationService';

//action types
import {
    UPDATE_EMAIL ,
    UPDATE_PASSWORD , 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './actionTypes';


//UPDATE_EMAIL  Action Generator
export const updateEmail= (email)=>({  
    type:UPDATE_EMAIL,
    email
});

//UPDATE_PASSWORD  Action Generator
export const updatePassword= (password)=>({  
    type:UPDATE_PASSWORD,
    password
});

//LOGIN_SUCCESS Action Generator
export const loginSuccess= (dispatch)=>{
    dispatch({type:LOGIN_SUCCESS });  
};

//LOGIN_FAILED Action Generator
export const loginFailed= (dispatch,errorMessage)=>{
    dispatch({
        type:LOGIN_FAILED,
        errorMessage
    })
}; 


// ATTEMPT_LOGIN_USER  Action Generator
export const attemptLoginUser = (email , password )=>{  
    return (dispatch)=>{
        dispatch({type:LOGIN_START});
      
        //call auth api method here instead of timeout
        setTimeout(() => {
            loginSuccess(dispatch);
            NavigationService.navigate('App');
        }, 50);

        //loginFailed(dispatch ,error.message);
    }
}
