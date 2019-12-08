
import { SET_CURRENT_USER } from "../types";

import isEmpty from '../validation/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
  // loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    // case USER_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    default:
      return state;
  }
}


// import {
//     LOGIN_SUCCSESS,
//     SET_CURRENT_USER
// } from '../types';


// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     user:null
// }

// export default function(state = initialState, action) {
//     const {type, payload} = action;

//     switch(type) {
//         case LOGIN_SUCCSESS:

//         localStorage.setItem('token', payload.AuthenticationToken);
//         return {
//             ...state,
//             ...payload,
//             isAuthenticated:true,
//         }

//         default:
//             return state;
//     }
// }