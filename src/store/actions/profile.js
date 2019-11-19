import axios from 'axios';
import {GET_PROFILE} from '../types';

/**************************************
 * FRIEND LIST
 * ***********************************/ 

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
/*****************************
 * ADD A FRIEND
 * ****************************/ 


export const friendAdd = (friendData, history) =>  async dispatch => {
    try {
        const headers = {AuthenticationToken:localStorage.getItem('token')}
        const res =  axios.post('/user/addfriend',friendData,{headers:headers})
        console.log(res);

        dispatch(getCurrentProfile())
        history.push('/friendlist')

    } catch (error) {
        console.log(error);
    }
}

/*************************************************
 * DELETE A FRIEND
 * **********************************************/ 

 export const deleteFriend = (id) => async dispatch => {
     try {
         const headers={AuthenticationToken:localStorage.getItem('token')}
         const res= await axios.delete(`/user/myfriends/${id}`,{headers:headers})
         dispatch(getCurrentProfile())
     } catch (error) {
         console.log(error);
     }
 }