import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const totalItems = this.props.shoppingCart.length;

        return (
            <button id="shopping_cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart_quantity">{totalItems}</span>
            </button>
        )
    }
}

export default Cart;