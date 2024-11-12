// 스토어...ㅎㅎㅎ.... 아놔 모르겠당 ^-^.....

import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "../slices/pokemonSlice";

const store = configureStore({
    reducer: {
    pokemon: pokemonReducer,
    },
    });

export default store;