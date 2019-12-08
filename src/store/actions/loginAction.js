import axios from "axios";
import { LOGIN_SUCCSESS, SET_CURRENT_USER } from "../types";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

export const userLogin = (loginData, history) => dispatch => {
  axios
    .post("user/login", loginData)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCSESS,
        payload: res.data
      });

      //   dispatch(history.push("./FriendList"));
      // Save to localStorage

      // Set token to localStorage
      var token = res.data.AuthenticationToken;
      console.log(token);
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push('/friendlist')
    })
    .catch(err => console.log(err));
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// export const userLogin = (loginData,history) => async dispatch => {

//    try {
//        const res = await axios.post('user/login',loginData);
// // console.log(res);
//        dispatch({
//            type:LOGIN_SUCCSESS,
//            payload:res.data
//        })

//        dispatch((
//            history.push('./FriendList')
//        ))

//    } catch (error) {
//        console.log(error);
//    }

// }
