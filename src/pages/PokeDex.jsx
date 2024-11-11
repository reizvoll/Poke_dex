import Dashboard from '../components/pokedex/Dashboard'
import PokemonList from '../components/pokedex/PokemonList';

// 버튼을 누르면 가지게 하고 싶지만.. 이미 기능이 있어서 이곳으로 넘어갈 때 자동으로 켜지도록 audio 태그 추가
// 근데 이거 Details에서 돌아가도 나온다... 이걸 어쩌지 ㅠㅡㅠ

const PokeDex = ({ selectedPokemons, addPokemon, removePokemon, resetPokemons }) => {
  return (
    <>
    <audio src='/Gameboy.mp3' autoPlay />
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
