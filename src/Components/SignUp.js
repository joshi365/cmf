import React, { Component } from 'react'
import {signUp} from '../store/actions/signUpAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

 class SignUp extends Component {

constructor(props) {
    super();
    this.state = {
        email:'',
        password:'',
    }
}

onSearchChange = (e) => {
    e.preventDefault();
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    const signUpData = {
        Email:this.state.email,
        Password:this.state.password
    }

   this.props.signUp(signUpData, this.props.history)
}

    render() {
        return (
            <div className='signup-form'>
            <form onSubmit={this.handleSubmit}>

            <div className='welcome-page-heading'>
            <h1>Welcome To <span>Friends App</span></h1>
            </div>

            <div className='all-form-fields'>
                <div className='login-title'>
                   <h2>Sign Up</h2> 
                </div>
                
            <div className='name-password-field'>

                <div className='row'>
                    <div className='col'>
                    <input
                     name= 'email' 
                     value={this.state.email} 
                     onChange={this.onSearchChange} 
                     type='email'
                     placeholder='Email adress'
                     >                   
                    </input>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                    <input 
                    name='password' 
                    value={this.state.password} 
                    onChange={this.onSearchChange} 
                    type='password'
                    placeholder='Password'
                    >
                    </input>           
                    </div>
                </div>
            
            </div>

            <div>
                <h3>Already a Member.<Link style={{color:'white'}} to='/login'>Login instead</Link></h3>
            </div>

            <button type='submit'>Sign up <span>-></span></button>
        </div>
            </form>
                
            </div>
        )
    }
}

 const mapStateToProps = state => ({
    
});

export default connect (mapStateToProps,
    {signUp}
    )(SignUp);