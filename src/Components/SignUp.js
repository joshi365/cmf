import React, { Component } from 'react'
import {signUp} from '../store/actions/signUpAction';
import {connect} from 'react-redux';

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
            <div>
            <h1>SignUp Page</h1>
            </div>
            <input name= 'email' value={this.state.email} onChange={this.onSearchChange} type='email'></input> Enter Your email
            <input name='password' value={this.state.password} onChange={this.onSearchChange} type='password'></input>Enter your password
            <button type='submit'>SignUp</button>
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