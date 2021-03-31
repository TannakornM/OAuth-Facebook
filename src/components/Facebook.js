import React, { Component, useState } from 'react';
import FacebookLoginWithButton from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import '../App.css';

const componentClicked = () => {
  console.log( "Clicked!" )
  console.log(NameFB)
}

const FBname = React.createContext('Facebook Name');

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
    appId="637001937118804"
    // autoLoad
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"/>
  )


const UserScreen = ({user})  => (
  <> <FBname.Provider value={user.name} /> 
  <Card style={{ width: '300px' }}>
    <Card.Header>
    <Image src={user.picture.data.url}  roundedCircle />
    </Card.Header>
    <Card.Body>
    <Card.Title>Welcome {user.name}!</Card.Title>
    <Card.Text>{ user.email }</Card.Text>
    </Card.Body>
    </Card> 
  </> 
)



class Facebook extends React.Component {
  state = {user:false}
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }
  
  render() {
    return (
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
        { this.state.user ? <UserScreen user={this.state.user}/>  :
          <LoginButton facebookResponse={this.facebookResponse}/>
        } 
      </div> 
    )
  }
}

class NameFB extends React.Component{
  static contextType = FBname;
  render(){
    return(
      this.context
    )
  }
}
console.log(FBname)
export {NameFB, UserScreen, LoginButton}
export default Facebook