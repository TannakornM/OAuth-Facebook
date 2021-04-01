import React, { Component, useState } from 'react';
import {BrowserRouter, Router, Route, Link, Redirect} from 'react-router-dom'
import Facebook  from './Facebook'
import '../App.css';
import FacebookLoginWithButton from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

const componentClicked = () => {
    console.log( "Clicked!" )
  }

const Login = ({fbResponse}) => (
    <FacebookLoginWithButton
      appId="637001937118804"
      // autoLoad
      fields="name,email,picture"
      onClick={componentClicked}
      callback={fbResponse}
      icon="fa-facebook"
      />
      
    )

const Index = ({facebookResponse}) => {
    
    return(
        <div className="bg">
        <div className='box'>
        <div className="flex-container">
            <div className='row'>
                <div className='flex-item'><h1>ระบบสารสนเทศพนักงาน</h1></div>
            </div> 
            <div className='row'>
                <div className='flex-item'><h2>บริษัท นัมเบอร์วัน จำกัด</h2></div>
            </div>
            <div className='row'>
                <div className='flex-item'><div class="vertical-center">
                    <Login fbResponse={facebookResponse} />
                    </div> 
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Index