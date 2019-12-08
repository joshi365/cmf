import axios from 'axios';
import {GET_PROFILE} from '../types';


/**************************************
 * FRIEND LIST
 * ***********************************/ 

export const getCurrentProfile = () => async dispatch => {
    try{
        const headers = {AuthenticationToken:localStorage.getItem('jwtToken')}
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
        const headers = {AuthenticationToken:localStorage.getItem('jwtToken')}
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
         const headers={AuthenticationToken:localStorage.getItem('jwtToken')}
         const res = await axios.delete(`/user/deletefriend/${id}`,{headers:headers})
         dispatch(getCurrentProfile())
     } catch (error) {
         console.log(error);
     }
 }

/********************************************************
 * EDIT A FRIEND
 * *******************************************************/ 
 export const EditTheFriend = (formData,friendID,history) =>  async dispatch => {
    try {
        const headers={AuthenticationToken:localStorage.getItem('jwtToken')}
        const res =  axios.patch(`/user/updatefriend/${friendID}`,formData,{headers:headers})
        console.log(res);
  
        dispatch(getCurrentProfile())
        history.push('/friendlist')
  
    } catch (error) {
        console.log(error);
    }
  }