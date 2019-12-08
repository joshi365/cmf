import React, { Component } from "react";
import { userLogin } from "../store/actions/loginAction";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const loginData = {
      Email: this.state.email,
      Password: this.state.password
    };

    this.props.userLogin(loginData, this.props.history);
  };

  render() {
    return (
      <div className="signup-form">
        <form onSubmit={this.onSubmitHandler}>
          <div className="welcome-page-heading">
            <h1>
              Welcome To <span>Friends App</span>
            </h1>
          </div>

          <div className="all-form-fields">
            <div className="login-title">
              <h2>Login</h2>
            </div>

            <div className="name-password-field">
              <div className="row">
                <div className="col">
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="email"
                    placeholder="Email adress"
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
            </div>

            <div>
              <h3>Forgot Password</h3>
              <h4>
                Not a member.{" "}
                <Link style={{ color: "white" }} to="/signup">
                  SignUp instead
                </Link>
              </h4>
            </div>

            <button type="submit">
              Login <span>-></span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { userLogin })(
    withRouter(Login));

//     <div className='login-main'>
//     <form onSubmit={this.onSubmitHandler}>
//     <input name='email' value={this.state.email} onChange={this.onChange} type='email' placeholder='email'></input>
//     <input name='password' value={this.state.password} onChange={this.onChange} type='password' placeholder='password'></input>
//     <button type='submit'>submit</button>
//     </form>
// </div>
