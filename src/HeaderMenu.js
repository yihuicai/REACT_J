import React, { Component } from 'react';

export default class HeaderMenu extends Component {
    render() {
        var hamburger;
        if (this.props.ham){
            hamburger = (<div className="ham" ><img onClick={this.props.navtoggle} className="pad" src="./images/header_icon_0_2.png" alt=""/></div>);
        }
        return (
            <div className="header_inner">
                {hamburger}
                <div className="logo_outer"><a href="/"><img className="logo" src={this.props.logoPath} alt="" /></a></div>
                <div style={this.props.display ? {display:'block'}:{display:"none"}}>
                    <div className="find">
                        <a id="sfind" onClick={this.props.toggle}><svg className="pad" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 -1 30 30"><path xmlns="http://www.w3.org/2000/svg" d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg></a>
                    </div>
                    <div className="cart">
                        <a href="/cart/">
                            <img className="pad" src={this.props.cartPath} alt="" />
                            <span className="cart_count">{this.props.cart_qty}</span>
                        </a>
                    </div>
                </div>    
            </div>);
    }
}