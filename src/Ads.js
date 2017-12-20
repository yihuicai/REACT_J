import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'
import data2 from './data2.json'
const URL_HEADER="http://localhost/index.php?m=api_ads";

export default class Ads extends Component {
    constructor(props){
        super(props);
        this.state={
          ads : data2.ads,
          ads_picks : data2.ads_picks,
          ads_picks_name : data2.ads_picks_name,
          ads_sales : data2.ads_sales[0]
        }
        //this.toggle = this.toggle.bind(this);
        //this.navToggle = this.navToggle.bind(this);
    }
    componentDidMount(){
        fetch(URL_HEADER, {
          method:'GET'
        })
        .then(response => response.json())
        .then(json=>{
          this.setState({
            ads: json.ads,
            ads_picks: json.ads_picks,
            ads_sales:json.ads_sales[0],
            ads_picks_name : json.ads_picks_name
          })
        });
    }

    render(){
        return (<div>
                  <div className="ads_sales">
                    <a href={this.state.ads_sales.url} ><img src={this.state.ads_sales.pic_path} alt={this.state.ads_sales.alt}/></a>
                  </div>
                  <div className="ads frame">
                      <svg className="left" xmlns="http://www.w3.org/2000/svg" fill="#eee" width="25" height="25" viewBox="0 0 25 25"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                        <Banner data={this.state.ads} />
                      <svg className="right" xmlns="http://www.w3.org/2000/svg" fill="#eee" width="25" height="25" viewBox="0 0 25 25"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                  </div>
                  <p className="picks_name title">{this.state.ads_picks_name}</p>
                  <div className="picks">
                      <svg className="left" xmlns="http://www.w3.org/2000/svg" fill="#eee" width="25" height="25" viewBox="0 0 25 25"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                        <Banner data={this.state.ads_picks} />
                      <svg className="right" xmlns="http://www.w3.org/2000/svg" fill="#eee" width="25" height="25" viewBox="0 0 25 25"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                  </div>
                  <p className="vertical_line"></p>
                </div>);
    }
}