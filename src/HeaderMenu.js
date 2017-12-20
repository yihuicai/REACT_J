import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
const prefix="https://localhost/static/themes/default/mobile/index/06";


export default class HeaderMenu extends Component {
    render() {
        var hamburger;
        if (this.props.ham){
            // src should be changed when deployed
            // src"/static/themes/default/mobile/images/header_icon_0_2.png"
            hamburger = (<div className="ham" ><img onTouchTap={this.props.navtoggle} onClick={this.props.navtoggle} className="pad" src="/static/themes/default/mobile/images/header_icon_0_2.png" alt=""/></div>);
        }
        return (
            <div className="header_inner">
                {hamburger}
                <div className="logo_outer"><a href="/"><img className="logo" src={this.props.logoPath} alt="" /></a></div>
                <div>
                    <div className="find">
                        <a id="sfind" onTouchTap={this.props.toggle} onClick={this.props.toggle}><svg className="pad" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 150 150"><path d="M100.292,110c-0.254,0-0.509-0.097-0.704-0.29l-17.32-17.151c-1.235-1.251-1.222-3.262,0.021-4.49     l5.407-5.333c1.206-1.188,3.292-1.173,4.481,0.031l17.11,17.35c0.388,0.393,0.383,1.026-0.009,1.414l-8.285,8.181     C100.8,109.904,100.546,110,100.292,110z M89.922,83.824c-0.309,0-0.601,0.12-0.82,0.336l-5.407,5.333     c-0.458,0.453-0.464,1.195-0.011,1.653l16.609,16.448l6.871-6.784L90.756,84.172C90.534,83.948,90.238,83.824,89.922,83.824z" stroke="black" fill="#000000"></path><g><g><path d="M56.305,93.765c-20.888,0-37.882-16.994-37.882-37.883C18.422,34.994,35.417,18,56.305,18     s37.882,16.994,37.882,37.882C94.187,76.771,77.193,93.765,56.305,93.765z M56.305,20c-19.786,0-35.882,16.097-35.882,35.882     s16.097,35.883,35.882,35.883s35.882-16.097,35.882-35.883S76.09,20,56.305,20z" stroke="black" fill="#000000"></path></g></g></svg></a>
                    </div>
                    <div className="cart">
                        <a href="/cart/">
                            <img className="pad" src="/static/themes/default/mobile/images/bags.png" alt="" />
                            <span className="cart_count">{this.props.cart_qty}</span>
                        </a>
                    </div>
                </div>    
            </div>);
    }
}