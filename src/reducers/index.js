import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import AuthReducerSignup from './AuthReducerSignup';

export default combineReducers ({
    auth: AuthReducer,
    auth2: AuthReducerSignup
});