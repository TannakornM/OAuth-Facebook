import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    componentClicked = () => {
        console.log('click')
    }
    responseFacebook = (response) => {
        console.log(response);
    }
    render() {
        return (
            <div>
                <FacebookLogin
                    appId="637001937118804"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </div>)
    }
}
    