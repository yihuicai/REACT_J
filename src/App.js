import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cartPath : "/static/themes/default/mobile/images/header_icon_0_1.png",
      logoPath : "/u_file/1711/photo/6f01b193fb.png"
    }
    if (this.props.test){
      this.state.cartPath = "https://jinglimited.com"+this.state.cartPath;
      this.state.logoPath = "https://jinglimited.com"+this.state.logoPath;
    }
  }
  
  render() {
    return (
      <div className="header">
        <HeaderMenu ham={true} cartPath={this.state.cartPath} logoPath={this.state.logoPath} />
      </div>
    );
  }
}

export default App;
