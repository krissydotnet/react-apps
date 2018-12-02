import React, { Component } from 'react';

class ShoppingCartItem extends Component {
   
    render() {   
        return (
            <div className="cart-item-container">
                <div className="cart-item-name">            {this.props.cartItem.itemName}</div>
                <div className="cart-item-qty">         {this.props.cartItem.quantity}
                </div>
                <div className="cart-item-cost">
                {this.props.cartItem.cost}
                </div>
            
            </div>
        )
    }
}

export default ShoppingCartItem;