import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';


export default class SearchBar extends Component {

    render(){
		return (
        <div id="searchall" className="clean" style={this.props.display ? {display:'block'}:{display:"none"}}>
				<form action={this.props.search} method="get">
					<a onTouchTap={this.props.toggle} onClick={this.props.toggle} ><svg xmlns="http://www.w3.org/2000/svg" className="inside" width="18" height="18" fill="#ddd" viewBox="0 0 25 25"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></a>
					<input type="submit" value="" className="sub" style={{background: "url(/static/themes/default/mobile/images/magnifier.svg) no-repeat center/1.8rem" }}/>
					<input type="text" defaultValue="" name="Keyword" placeholder="Search" className="text" />
				</form>
        </div>)
    }
}