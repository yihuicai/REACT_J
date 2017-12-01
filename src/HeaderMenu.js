import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class HeaderMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            logoPath : this.props.logoPath,
            cartPath : this.props.cartPath,
            ham : this.props.ham
        }

    }
    render() {
        var hamburger;
        if (this.state.ham){
            hamburger = (<Col xs="2" ><img className="pad" src="../images/header_icon_0_2.png" alt=""/></Col>);
        }
        return (
            <Container className="header">
                <Row>
                    {hamburger}
                    <Col xs={{size:'6'}} sm={{size:'5',offset:1}}><a href="/"><img className="logo" src={this.state.logoPath} alt="" /></a></Col>
                    <Col xs={{size:'1', offset: 1}}>
                        <a id="sfind" href="#"><svg className="pad" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 -3 30 30"><path xmlns="http://www.w3.org/2000/svg" d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg></a>
                    </Col>
                    <Col xs="1">
                        <a href="/cart/">
                            <img className="pad" src={this.state.cartPath} alt="" />
                            <span className="cart_count">1</span>
                        </a>
                    </Col>
                </Row>
            </Container>);
    }
}