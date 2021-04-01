import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
// import Map from './Map'
import {BrowserRouter, Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import Facebook  from './components/Facebook'
import PeopleList from './components/PeopleList'
import Index from './components/Login'
import FacebookLoginWithButton from 'react-facebook-login';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {user: null}
    }
    facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }

    componentDidMount() {
      this.facebookResponse()
    }

  render() {
    if (this.state.user == null) {
      return (
        
        <div>
          <Redirect to='/'/>
          <Index facebookResponse={this.facebookResponse}/>
        </div>
      );
    } else if (this.state.user){
      return (
        <div>
        <Redirect to='/home'/>
        <PeopleList userData={this.state.user} />
        </div>
      )
    }
    return (
      <div>
      <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={PeopleList} />
        </Switch>
      </div>
    )
  }
}
export default App

/*function App() {
  return (
    <div className="App">
      <Facebook />
    </div>
  );
}

function PeopleL() {
  return (
    <div className="PeopleL">
      <PeopleList/>
    </div>
  );
}

export {App, PeopleL};*/
