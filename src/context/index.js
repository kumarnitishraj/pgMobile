import React from 'react';

export default React.createContext({
  auth:{
    logedIn:false,
    user:{}
  },
  loading:{
    apiLoading: false,
    submitButtonLoading: false
  },
  pgList:[],
  guestList:[],
  login: ()=>{},
  register: ()=>{},
  getPgList: ()=>{},
  getPgGuestList: ()=>{},
});
