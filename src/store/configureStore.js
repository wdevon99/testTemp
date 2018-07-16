import { createStore , applyMiddleware } from 'redux';
//the combined reducers
import combineReducers from '../reducers';

//ReduxThunk middleware
import ReduxThunk from 'redux-thunk'

export default()=>{
    //creating the Redux store with the combineReducers passed in
    const store= createStore( combineReducers , applyMiddleware(ReduxThunk));
    return store;
}

