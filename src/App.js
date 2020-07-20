import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello' 
import Message from './components/Message'
import Counter from './components/Counter'
import Form from './components/Form'
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import HookCounter from './components/HookCounter';
import Hook from './components/Hook';
import Ajax from './components/Ajax';

class App extends Component {
  render(){
  return (
    <div className="App">

      {/* <Hook /> */}
      <Ajax />

    </div>
  );
}
}
export default App;
