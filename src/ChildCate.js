import React, {Component} from 'react';

export default class ChildCate extends Component {
    render(){
        return this.props.data.map((item) => <a style={this.props.disp?{visibility:'visible',opacity: '1'}:{visibility:'hidden',opacity: '0'}} href={item.url}>{item.Category_en}</a>);
    }
}
