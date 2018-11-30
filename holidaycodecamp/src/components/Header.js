import React, { Component } from 'react';
import Cart from './Cart';

class Header extends Component {

    openAlert = () => {
        alert('Warning! Most Delicious Cupcakes!');
    }

    render() {
        return (
                <header>
                <h1><i className="fas fa-mortar-pestle"></i>{this.props.name}</h1>
                <button id="message" onClick={this.openAlert}>{this.props.slogan}</button>
                <Cart shoppingCart={this.props.shoppingCart}/>
                </header>
        );
    }
}

export default Header;