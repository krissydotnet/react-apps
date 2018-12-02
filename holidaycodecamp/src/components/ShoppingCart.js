import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import CloseButton from './CloseButton';

class ShoppingCart extends Component {
    render() {
        
        return (
           <div className="modal">
            <section id="shopping-cart" className="shopping-cart-container">
            <div className="shopping-cart-header" >
            <CloseButton closeWindow={this.props.closeWindow} />
            </div>
            <div className="shopping-cart-main">
                <h1 className="title">Shopping Cart</h1>
                <div className="cart-header cart-item-container">
                <div className="cart-item-name">            Item</div>
                <div className="cart-item-qty">Quantity
                </div>
                <div className="cart-item-cost">
                Price
            </div>
            
            </div>
                {this.props.shoppingCart.map((item) =>
                    <ShoppingCartItem  cartItem={item} key={item.itemId}/>
                )}
            </div>
            </section>
           </div>
        )
    }
}

export default ShoppingCart;