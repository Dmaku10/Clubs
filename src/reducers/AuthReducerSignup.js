import {CREATE_USER_FAIL, CREATE_USER_SUCCESS, CREATE_USER} from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case(CREATE_USER_SUCCESS):
            const {user: {uid: userId}} = action;
            return {...state, loggedIn: true, userId};
        case(CREATE_USER_FAIL):
            const {error} = action;
            return {...state, loggedIn: false, error};
        default:
            return state;
    }
};


