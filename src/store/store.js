import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productSlice from "./products/productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productSlice,
    },
    
});

export default store;