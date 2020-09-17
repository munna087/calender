import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import ReactCalender from './Calender/ReactCalender';


const App = () => {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/calender' component={ReactCalender}/>
        <Redirect to='/home' />
      </Switch>
    </div>
  )
}

export default App;

