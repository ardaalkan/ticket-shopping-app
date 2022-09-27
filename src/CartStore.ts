import { combineReducers } from "@reduxjs/toolkit";

import CartReducer from "./CartReducer";

const CartStore = combineReducers(CartReducer);

export default CartStore;