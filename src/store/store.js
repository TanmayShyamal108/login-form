
import { configureStore } from "@reduxjs/toolkit";

import cartSlicer from "../slicer/cartSlicer";

const store = configureStore({
    reducer: {  
        cart: cartSlicer
    }
})
export default store



