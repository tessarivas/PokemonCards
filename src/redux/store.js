import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

console.log("Estado inicial de Redux:", store.getState());

export default store;
