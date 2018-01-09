import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectUserColor, ConnectUserName } from './Connect'

class App extends Component {
  render() {
    return (
      <div>
        <ConnectUserName />
        <ConnectUserColor />
      </div>  
    );
  }
}

export default App;
