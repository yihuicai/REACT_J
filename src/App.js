import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu.js';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import data from './data.json';
import Ads from './Ads.js'
import Fashion from './Fashion.js'


// The api
const URL_HEADER="http://localhost/index.php?m=api_header";
//const data="./data.json"


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      // default offline 
      cartPath : "loading",
      logoPath : "",
      searchDisplay : false,
      menuDisplay : true,
      navDisplay: false,
      category: '',
      cart_qty: 0,
      login : "loading"
    }
    this.toggle = this.toggle.bind(this);
    this.navToggle = this.navToggle.bind(this);
  }
  componentDidMount(){
    fetch(URL_HEADER, {
      method:'GET',
      credentials: 'include' // This is set on request
    })
    .then(response => response.json())
    .then(json=>{
      this.setState({
        cartPath: json.cart,
        logoPath: json.logo,
        cart_qty: json.cart_qty,
        category: json.nav_2,
        login : json.login
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
      <div>
        <div className="header">
          <HeaderMenu ham={true} navtoggle={this.navToggle} toggle={this.toggle}  cart_qty={this.state.cart_qty} cartPath={this.state.cartPath} logoPath={this.state.logoPath} />
          <SearchBar toggle={this.toggle} display={this.state.searchDisplay} />
          <NavBar login={this.state.login} display={this.state.navDisplay} navtoggle={this.navToggle} category={this.state.category}/>
        </div>
        <Ads />
        <Fashion />
      </div>

    );
  }
}

export default App;
