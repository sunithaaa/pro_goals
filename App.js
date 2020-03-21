import React, { Component } from 'react';

import { HashRouter,Route} from 'react-router-dom'


import './App.css';

import  Home  from './components/Home';
import Employee from './components/Employee';

class App extends Component {
  render(){
  return (
    <HashRouter>
      <Route path='/' component={Home}/>
      <Route path='#/Employee/' component={Employee}/>
    </HashRouter>
  );
}
}

export default App;
