import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import pokemonReducer from "./slices/pokemonSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer, 
  },
});

console.log("Estado inicial de Redux:", store.getState());

export default store;
