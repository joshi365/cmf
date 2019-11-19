import axios from 'axios';
import {LOGIN_SUCCSESS} from '../types'

export const userLogin = (loginData,history) => async dispatch => {
    
   try {
       const res = await axios.post('user/login',loginData);
// console.log(res);
       dispatch({
           type:LOGIN_SUCCSESS,
           payload:res.data
       })

       dispatch((
           history.push('./FriendList')
       ))


   } catch (error) {
       console.log(error);
   } 

}