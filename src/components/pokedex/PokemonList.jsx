import styled from 'styled-components';
import MOCK_DATA from '../../assets/Datas';
import PokemonCard from './PokemonCard';

// 리스트 전체 영역 (가운데 정렬 안맞아서 바꿈)
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 20px auto 40px ;
`;

const PokemonList = ({addPokemon, removePokemon, selectedPokemons }) => {
  return (
<ListContainer>
    {MOCK_DATA.map((pokemon) => (
        <PokemonCard 
        key={pokemon.id} 
        pokemon={pokemon} 
        addPokemon={addPokemon}
        removePokemon={() => removePokemon(pokemon)}
        isSelected={selectedPokemons.some((p) => p.id === pokemon.id)} />
    ))}
</ListContainer>
  );
}

export default PokemonList;
