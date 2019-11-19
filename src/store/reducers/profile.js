import {GET_PROFILE} from '../types';

const initialState = {
    profile:{}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_PROFILE:
            return{
                ...state,
                profile:payload
            };

            default:
                return state;
    }
}