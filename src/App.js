import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
// import Map from './Map'
import {BrowserRouter, Router, Route, Link, Redirect} from 'react-router-dom'
import Facebook  from './components/Facebook'
import PeopleList from './components/PeopleList'
import Index from './components/Login'
import FacebookLoginWithButton from 'react-facebook-login';

class App extends React.Component {
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }
  constructor(props) {
    super(props)
      this.state = {user: {}}
    }
    componentDidMount() {
      this.facebookResponse()
    }

  render() {  
    if (this.state.user == null) {
      return (
        <div>
          <Index facebookResponse={this.facebookResponse}/>
        </div>

      );
    }
    return (
      <div>
        <div>
          <Route exact path="/" component={PeopleList} />
          <Route path="/login" component={Index} />
        </div>
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
