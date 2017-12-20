import React, {Component} from 'react';
import ChildCate from './ChildCate';
import injectTapEventPlugin from 'react-tap-event-plugin';

//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


export default class ParentCate extends Component {
    constructor(props){
        super(props);
        this.state = {
            display : false
        }
        this.ChangeDisplay=this.ChangeDisplay.bind(this);
    }
    ChangeDisplay(){
        this.setState({
            display:!this.state.display
        });
        //console.log(this.props.children);
    }
    render(props){
        return (<div className="category_box">
            <a onClick={this.ChangeDisplay} onTouchTap={this.ChangeDisplay}>{this.props.text}</a>
            <div className="category_children" style={this.state.display?{height:'500px'}:{height:'0'}}><ChildCate data={this.props.children} disp={this.state.display} /></div>
        </div>);
    }
}
