import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from "../../api"; 

export const fetchPokemon = createAsyncThunk("pokemon/fetchPokemon", async () => {
  const data = await getPokemon();
  return data;
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonList: [],
    loading: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
