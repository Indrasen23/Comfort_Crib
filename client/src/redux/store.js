import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';

export const store = configureStore({
    reducer: { user: userReducer },
    // prevents error in the browser
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});