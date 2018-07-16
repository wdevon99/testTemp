import {combineReducers} from 'redux';

//importing the reducers
import loginReducer from '../reducers/loginReducer';

//setting the stores combined reducers and exporting
export default combineReducers({
    loginReducer:loginReducer
});