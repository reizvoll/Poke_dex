import styled from "styled-components";
import MOCK_DATA from "../../datas/data";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../../redux/slices/pokemonSlice";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const PokemonList = () => {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector(state => state.pokemon.selectedPokemons);

  return (
    <ListContainer>
      {MOCK_DATA.map(pokemon => (
        <PokemonCard 
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={() => dispatch(addPokemon(pokemon))}
          removePokemon={() => dispatch(removePokemon(pokemon))}
          isSelected={selectedPokemons.some(p => p.id === pokemon.id)}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
