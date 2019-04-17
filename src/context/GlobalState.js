import React, { Component } from 'react';

import ShopContext from './shop-context';

class GlobalState extends Component {
  state = {
    auth:{
      logedIn:false
    },
    user:{}
  };
  
  render() {
    return (
      <ShopContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default GlobalState;
