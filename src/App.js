import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Map from './Map'
import Facebook from './components/Facebook'
import PeopleList from './components/PeopleList'

function App() {
  return (
    <div className="App">
      <Facebook/>
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

export {App, PeopleL};
