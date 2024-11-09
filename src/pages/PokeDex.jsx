import Dashboard from '../components/pokedex/Dashboard'
import PokemonList from '../components/pokedex/PokemonList';

const PokeDex = ({ selectedPokemons, addPokemon, removePokemon, resetPokemons }) => {
  return (
    <>
    <Dashboard 
            selectedPokemons={selectedPokemons}
            removePokemon={removePokemon}
            addPokemon={addPokemon}
            resetPokemons={resetPokemons} />
    <PokemonList
            selectedPokemons={selectedPokemons}
            addPokemon={addPokemon}
            removePokemon={removePokemon} />
    </>
  );
}

export default PokeDex
