import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js'

class App extends Component {
  render() {
    return (
      <div className="header">
        <HeaderMenu />
      </div>
    );
  }
}

export default App;
