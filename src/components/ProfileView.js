import React, { Component } from 'react';
import './LoginForm.css';
import Logout from '../action/Logout';
import {signOut} from '../action';


class ProfileView extends Component {
    
    onClickLogout() {
        this.props.store.dispatch(signOut())
        Logout();
    }

    render() {
        var userName = localStorage.getItem("userName");
        return (
        <div id="LoginForm">
            <h1>Hello {userName}</h1>
            <div>{localStorage.getItem("userProfile")}</div>
            <button onClick={this.onClickLogout.bind(this)} type="button">Log Out</button>
        </div>
        );
    }
}

export default ProfileView;
