import React, { Component } from 'react';

import ShopContext from './index';
import NetworkActions from './actions/network';

class GlobalState extends Component {
  state = {
    auth:{
      logedIn:false,
      user:{}
    },
    loading:{
      apiLoading: false,
      submitButtonLoading: false
    },
    pgList:[],
    guestList:[]
  };
  
  render() {
    console.log('Global State Changes : ',this.state)
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          login: (data) => NetworkActions.login(this, data),
          register: (data) => NetworkActions.register(this, data),
          getPgList: () => NetworkActions.getPgLists(this),
          getPgGuestList: (pgId) => NetworkActions.getGuestReletedPg(this, pgId)
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default GlobalState;
