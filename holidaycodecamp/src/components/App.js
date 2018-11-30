import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import MenuItems from './MenuItems';
import Checkout from './Checkout';

class App extends Component {
  state = {
    menuItems: [
      {
        id: "creamcheese",
        name: "Frosted Creamcheese Cupcake",
        cost: 2.99,
        image: "https://drive.google.com/uc?export=view&id=1uoH1X_pcjLDxgF8MHajQYZnZjL08UMze",
        review: "Best you've ever had."
      },
      {
        id: "spice",
        name: "Pumpkin Spice Cupcake",
        cost: 2.99,
        image: "https://drive.google.com/uc?export=view&id=1OO48GolmtdqT72EaI0-nbNVsgWDsugY2",
        review: "They're great!!!!"
      },
      {
        id: "brulee",
        name: "Caramel Brulee Cupcake",
        cost: 2.99,
        image: "https://drive.google.com/uc?export=view&id=1WXE-dkglsk6aE7DaPhnkdCNmhBLsajvi",
        review: "These are the best cupcakes"
      },
    ],
    orderTotal: 2.99,
    itemDesc: "Cupcake",
    itemPrice: 2.99,
    itemId: 0,
    quantity: 1,
    isCheckoutHidden: true,
    isMenuHidden: false,
    shoppingCart: []
  }
  showPopup= (id) => {
    const popup = document.getElementById(id + '_popup');
    popup.classList.toggle("show");
  }

  calculateTotal = (newQuantity) => {
    this.setState( prevState => ({
      quantity: parseInt(newQuantity),
      orderTotal: ((prevState.itemPrice * 100) * newQuantity/100)
    }));

  }
   handleOrderItem = (id, name, cost) => {


    this.setState( prevState => (
    {
      quantity: 1,
      orderTotal: cost,
      itemDesc: name,
      itemId: id
    }
    
  ))
    this.toggleCheckoutHidden();
    this.toggleMenuHidden();
  }
  

  toggleCheckoutHidden = () => {
    this.setState( prevState => ({
        isCheckoutHidden: !prevState.isCheckoutHidden
    }))
  }
  toggleMenuHidden = () => {
    this.setState( prevState => ({
        isMenuHidden: !prevState.isMenuHidden
    }))
  }


  handleAddToCart = (itemId, itemQuantity, itemCost) => {

    this.setState ( prevState => {
      return {
       shoppingCart: [
         ...prevState.shoppingCart,
         {
          itemId: itemId, 
          quantity: itemQuantity,
          cost: itemCost
         }
       ]
      }
    })

    this.toggleCheckoutHidden();
    this.toggleMenuHidden();

  }

  render() {
    console.log(this.state.shoppingCart);
    return (
      <div className="App">
    
        <Header name="Erica’s Cupcakery" slogan="#1 Bakery in PA!" shoppingCart={this.state.shoppingCart}/>
        
        <div className="main-container">
          
          {!this.state.isMenuHidden &&
          <div className="container">
          <Menu items={this.state.menuItems}/>
          <MenuItems items={this.state.menuItems} handleClick={this.showPopup}
          orderItem={this.handleOrderItem}
          />
          </div>
          }

          {!this.state.isCheckoutHidden && 
          <Checkout 
          itemId={this.state.itemId}
          cost={this.state.itemPrice} 
          orderTotal={this.state.orderTotal}
          quantity={this.state.quantity} 
          name={this.state.itemDesc}
          changeQuantity={this.calculateTotal}
          addToCart={this.handleAddToCart}
          />}
         
         </div>
      </div>
    );
  }
}

export default App;
