import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import CloseButton from './CloseButton';

class ShoppingCart extends Component {

    render() {
        const shoppingCartItems = 
            this.props.shoppingCart.map((item) =>
            <ShoppingCartItem  cartItem={item} key={item.itemId}/>
        )
        
        return (
           <div className="modal">
            <section id="shopping-cart" className="shopping-cart-container">
            <CloseButton closeWindow={this.props.closeWindow} />    
            <div className="shopping-cart-main">
                <h1 className="title">Shopping Cart</h1>
                <div className="cart-header">
                <div className="cart-item-name">            Item</div>
                <div className="cart-item-qty">Quantity
                </div>
                <div className="cart-item-cost">
                Price
                </div>
            
            </div> 
                {shoppingCartItems}
            </div>
            <div className="shopping-cart-footer">
                <button className="btn" onClick={this.props.submitOrder}>Submit Order</button>
            </div>
            </section>
           </div>
        )
    }
}

export default ShoppingCart;