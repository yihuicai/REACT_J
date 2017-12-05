import React, {Component} from 'react';

export default class NavBar extends Component {
    render() {
        return (
        <div className="nav" style={this.props.display ? { transform: "translateX(-30%)"} : { transform: "translateX(-100%)" }}>
            <a onClick={this.props.navtoggle} className="close fr"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ddd" viewBox="0 0 25 25"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></a>
            <div className="category">
                This is the Nav Category
            </div>
        </div>);
    }

}