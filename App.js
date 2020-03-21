import React, { Component } from 'react';
import pro_logo from './pro_logo.jpg'

import { BrowserRouter as Router, Route, Switch, Redirect , Link} from 'react-router-dom'


import './App.css';

import Home from './components/Home';

class App extends Component {
  render(){
  return (
    <div>
      
      
      <div className="App-header">
        <Home/>
      </div>

      <div className="App_1">
        <text id="1">
          <h2>Employee login</h2>
        </text>  
        <div id="emp_id">
          <input type="text" placeholder="enter employee id"></input>
        </div>
        <div id="emp_pass">
          <input type="text" placeholder="enter employee password"></input>
        </div>
        <div className="container"> 
        
        <button id="b1">
             Login
        </button>
        
       
        </div>
      </div>

      <div className="App_2">
        <text id="2">
          <h2>Admin login</h2>
        </text>  
        
        <div id="admin_id">
        <input type="text" placeholder="enter admin id"></input>
        </div>
        <div id="admin_pass">
          <input type="text" placeholder="enter admin password" ></input>
        </div>
        <div className="container"> 
        
        <button id="b2">
             Login
        </button>
        
       
        </div>
      </div>
      <div>
      <footer class="footer">
        <p>objectives and key results.</p>
      </footer>
      </div>
      
    </div>
  );
}
}

export default App;
