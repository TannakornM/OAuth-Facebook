import React, { Component, useState } from 'react';
import {BrowserRouter, Router, Route, Link, Redirect} from 'react-router-dom'
import Facebook  from './Facebook'
import '../App.css';
import FacebookLoginWithButton from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

const componentClicked = () => {
    console.log( "Clicked!" )
  }

const Login = ({facebookResponse}) => (
    <FacebookLoginWithButton
      appId="637001937118804"
      // autoLoad
      fields="name,email,picture"
      onClick={componentClicked}
      callback={facebookResponse}
      icon="fa-facebook"/>
    )

export default Login