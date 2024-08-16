 import { createSlice } from "@reduxjs/toolkit";


 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
        totalproduct: 0
    }, 
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.total += action.payload.price;
            state.totalproduct += 1;
    
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            state.total -= action.payload.price;
            state.totalproduct -= 1;
        },
    },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;