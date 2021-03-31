import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router'
import App from './App';
//import * as serviceWorker from ''

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

//serviceWorker.unregister();

/*ReactDOM.render( 
  <React.StrictMode>
    <Appp />,<PeopleL/>
  </React.StrictMode>,
  document.getElementById('root'));*/

