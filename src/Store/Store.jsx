import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "../Slicers/Carrito";

const store = configureStore({
    reducer:{
        carrito: carritoReducer
    }
});

export default store;
