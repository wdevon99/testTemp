//action types
import {
    UPDATE_EMAIL ,
    UPDATE_PASSWORD ,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_START
} from '../actions/actionTypes';

//defining the default state
const defualtLoginReducerState ={
    email:'',
    password:'',
    errorMessage: '',
    loading:false,
    user:null
};

// Login Reducer Function
const loginReducer=(state = defualtLoginReducerState , action)=>{
    switch(action.type){
        case UPDATE_EMAIL:
            return{
                ...state,                
                email:action.email,
            }
        case UPDATE_PASSWORD:
            return{
                ...state,                
                password:action.password,
            }
        case LOGIN_START:
            return{
                ...state,
                loading:true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                errorMessage:""
            }
        case LOGIN_FAILED:
            return{
                ...state,
                errorMessage:action.errorMessage,
                loading:false,
            }
        default:
            return state; 
    }
}

export default loginReducer;