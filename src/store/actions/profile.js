import axios from 'axios';
import {GET_PROFILE} from '../types';

export const getCurrentProfile = () => async dispatch => {
    try{
        const headers = {AuthenticationToken:localStorage.getItem('token')}
        const res = await axios.get('/user/myfriends',{headers:headers});
        // console.log(res);

        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })
    }
        catch(error) {
            console.log(error)
        }
    }
