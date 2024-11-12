// rxslice!!! 개쩐당!!! ^-^)b

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedPokemons : []
}

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (!state.selectedPokemons.find(p => p.id === action.payload.id)) {
        if (state.selectedPokemons.length < 6) {
          state.selectedPokemons.push(action.payload);
        } else {
          alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
        }
      } else {
        alert("이미 선택된 포켓몬입니다.");
      }
    },
    removePokemon: (state, action) => {
      // 포켓몬을 ID로 찾아서 제거
      state.selectedPokemons = state.selectedPokemons.filter(
        p => p.id !== action.payload.id
      );
    },
    resetPokemons: (state) => {
      // 포켓몬 선택 초기화
      state.selectedPokemons = [];
    },
  },
});

export const { addPokemon, removePokemon, resetPokemons } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;