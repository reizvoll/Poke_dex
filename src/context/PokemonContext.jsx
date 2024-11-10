import { createContext, useContext } from 'react'

export const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
}

