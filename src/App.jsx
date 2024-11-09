// rfc하라고!!!!

import { useState } from 'react';
import Router from './shared/Router'

function App() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);


  const addPokemon = (pokemon) => {
    
    if (selectedPokemons.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    
    if (selectedPokemons.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }

    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemons(selectedPokemons.filter((p) => p.id !== pokemon.id));
  };

  const resetPokemons = () => {
    setSelectedPokemons([]);
  };
  return <Router 
  selectedPokemons={selectedPokemons}
  addPokemon={addPokemon}
  removePokemon={removePokemon}
  resetPokemons={resetPokemons}
  />;
}

export default App;
