import React, { Component } from 'react'
import {userLogin} from '../store/actions/loginAction';
import {connect} from 'react-redux';

class Login extends Component {
     
    state={
        email:'',
        password:''
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const loginData = {
            Email:this.state.email,
            Password:this.state.password
        }

        this.props.userLogin(loginData, this.props.history);
    }

    render() {
        return (
            <div className='login-main'>
                <form onSubmit={this.onSubmitHandler}>
                <input name='email' value={this.state.email} onChange={this.onChange} type='email' placeholder='email'></input>
                <input name='password' value={this.state.password} onChange={this.onChange} type='password' placeholder='password'></input>
                <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect (mapStateToProps,
    {userLogin}
    )(Login);