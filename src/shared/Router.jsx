import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PokeDex from '../pages/PokeDex'
import PokeDetails from '../pages/PokeDetails'
import GlobalStyles from './GlobalStyles'

export default function Router({ selectedPokemons, addPokemon, removePokemon, resetPokemons }) {
  return (
  <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokedex" element={<PokeDex 
        selectedPokemons={selectedPokemons}
        addPokemon={addPokemon}
        removePokemon={removePokemon}
        resetPokemons={resetPokemons}
        />}/>
        <Route path="/pokedetails/:id" element={<PokeDetails />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

