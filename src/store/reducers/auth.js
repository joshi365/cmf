import {
    LOGIN_SUCCSESS
} from '../types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user:null
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case LOGIN_SUCCSESS:

        localStorage.setItem('token', payload.AuthenticationToken);
        return {
            ...state,
            ...payload,
            isAuthenticated:true,
        }

        default:
            return state;
    }
}