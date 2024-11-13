import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedPokemons: []
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (!state.selectedPokemons.find(p => p.id === action.payload.id) && state.selectedPokemons.length < 6) {
        state.selectedPokemons.push(action.payload);
      }
    },
    removePokemon: (state, action) => {
      state.selectedPokemons = state.selectedPokemons.filter(p => p.id !== action.payload.id);
    },
    resetPokemons: (state) => {
      state.selectedPokemons = [];
    },
  },
});

export const { addPokemon, removePokemon, resetPokemons } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;