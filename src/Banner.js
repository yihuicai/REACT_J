import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const URL_HEADER="http://localhost/index.php?m=api_ads";

export default class Banner extends Component {
    render(){
        return (<Carousel emulateTouch={true} showStatus={false} showThumbs={false} showIndicators={false} showArrows={true}>
            {this.props.data.map((item)=><div>
                <a href={item.url}><img src={item.pic_path} alt={item.alt}/></a>
            </div>)}
        </Carousel>);
    }
}