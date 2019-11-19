import axios from 'axios';

export const  signUp = (signUpData,history) => dispatch => {
    
 axios.post('/user/signup',signUpData)
        .then(res => {
            // console.log(res)
            dispatch(history.push('/login'))
    
    })
    .catch(err => console.log(err))
}