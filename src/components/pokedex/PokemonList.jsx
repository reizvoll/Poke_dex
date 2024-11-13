import styled from "styled-components";
import MOCK_DATA from "../../datas/data";
import PokemonCard from "./PokemonCard";
import { usePokemonContext } from "../../context/usePokemonContext";

// 리스트 전체 영역
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const PokemonList = () => {
  const { addPokemon, removePokemon, selectedPokemons } = usePokemonContext();


  return (
    <ListContainer>
      {MOCK_DATA.map(pokemon => (
        <PokemonCard 
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
          removePokemon={() => removePokemon(pokemon)}
          isSelected={selectedPokemons.some(p => p.id === pokemon.id)}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
