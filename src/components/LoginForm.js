import React, { Component } from 'react';
import './LoginForm.css';
import Login from '../action/Login';
import {signIn} from '../action';

class LoginForm extends Component {

  onClickLogin() {
    var logInParams = {
        username: this.refs.usernameInput.value,
        password: this.refs.passwordInput.value
    }

    var loginResult = Login(logInParams);

    if ( loginResult ) {
      this.props.store.dispatch(signIn())
      this.setState({ respond: loginResult });
      localStorage.setItem("userName", logInParams.username);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userProfile", JSON.stringify( loginResult ));

    }
    else {
      alert ("Error!! Can not log in");
      localStorage.setItem("isLoggedIn", false);

    }

    
  }

  render() {
    return (
      <div id="LoginForm">
        <form>
            <div>
            <label><b>Username</b></label><br/>
            <input id="usernameInput" ref="usernameInput" placeholder="Username" type="text" /><br/>
            </div>
            <div>
            <label><b>Password</b></label><br/>
            <input id="passwordInput" ref="passwordInput" placeholder="Password" type="password" /><br/>
            </div>
        </form>
        <button onClick={this.onClickLogin.bind(this)} type="button">Login</button>
      </div>
    );
  }
}

export default LoginForm;
