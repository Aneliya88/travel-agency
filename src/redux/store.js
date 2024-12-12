import { configureStore } from '@reduxjs/toolkit';
import tours from './toursSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        tours,
        cart
    }
})