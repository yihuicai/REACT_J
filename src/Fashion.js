import React, { Component } from 'react';
import './App.css';
import Banner from './Banner'
import data3 from './data3.json'
const URL_HEADER="http://localhost/index.php?m=api_fashion";


export default class Fashion extends Component {
    constructor(props){
        super(props);
        this.state={
          shop : data3.shop[0],
          news : data3.news,
          essentials : data3.essentials[0]
        }
        //this.toggle = this.toggle.bind(this);
        //this.navToggle = this.navToggle.bind(this);
    }
    componentWillMount(){
        fetch(URL_HEADER, {
          method:'GET',
          cookie:document.cookie
        })
        .then(response => response.json())
        .then(json=>{
          this.setState({
            shop: json.shop[0],
            news: json.news,
            essentials: json.essentials[0]
          })
        });
      }
    
    render(){
        var shop_background = {
            background : "url("+this.state.shop.pic_path+") no-repeat center top",
            backgroundSize : "cover"
        }
        var ess_background = {
            background : "url("+this.state.essentials.pic_path+") no-repeat center top",
            backgroundSize : "cover"            
        }
        return (<div>
                    <div className="shop" style={shop_background}>
                        <div className="words">
                            <strong>{this.state.shop.name}</strong>
                        </div>
                        <div className="brief">
                            <a href={this.state.shop.url}><span>{this.state.shop.brief}</span></a>
                        </div>
                    </div>
                    <div className="title">What's New</div>
                    <div className="news">
                        <svg className="left" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                        <Banner data={this.state.news} />
                        <svg className="right" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>
                    </div>
                    <div className="title">Daily Essentials</div>
                    <div className="essentials" style={ess_background} >
                        <div className="text">
                            <a href={this.state.essentials.url}><strong>{this.state.essentials.name}</strong></a>
                        </div>
                    </div>
                </div>)
    }
}