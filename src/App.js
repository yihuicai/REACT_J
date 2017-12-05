import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js'
import SearchBar from './SearchBar'
import NavBar from './NavBar'

// The api
const URL_HEADER="http://localhost/index.php?m=api_header";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cartPath : "default",
      logoPath : "default",
      searchDisplay : false,
      menuDisplay : true,
      navDisplay: false,
      category: null,
    }
    this.toggle = this.toggle.bind(this);
    this.navToggle = this.navToggle.bind(this);
  }
  componentDidMount(){
    fetch(URL_HEADER, {
      method:'GET'
    })
    .then(response => response.json())
    .then(json=>{
      this.setState({
        cartPath: json.cart,
        logoPath: json.logo,
        cart_qty:json.cart_qty,
      })
    });
  }
  navToggle() {
    this.setState({
      navDisplay: !this.state.navDisplay
    });
  }
  toggle() {
    this.setState({
      searchDisplay : !this.state.searchDisplay,
      menuDisplay : !this.state.menuDisplay
    });
  }
  render() {
    // pass the state to header menu
    return (
      <div className="header">
        <HeaderMenu ham={true} navtoggle={this.navToggle} toggle={this.toggle} display={this.state.menuDisplay} cart_qty={this.state.cart_qty} cartPath={this.state.cartPath} logoPath={this.state.logoPath} />
        <SearchBar toggle={this.toggle} display={this.state.searchDisplay} />
        <NavBar display={this.state.navDisplay} navtoggle={this.navToggle} category={this.state.category}/>
      </div>
    );
  }
}

export default App;
