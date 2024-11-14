import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PokemonName = styled.h3`
  font-size: 18px;
  color: #2b2b2b;
  margin: 4px 0;
`;

const PokemonNumber = styled.span`
  font-size: 14px;
  color: #777;
`;

const AddBtn = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: transparent;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
  display: block;
  width: 65px;
  height: 23px;
  font-family: 'DungGeunMo';
  margin: 10px 10px;

  &:hover {
    background-color: #8b0000;
  }
`;

export default function PokemonCard({ pokemon, addPokemon }) {

    const nav = useNavigate();

    const goDetails = () => {
      nav(`/pokedetails/${pokemon.id}`);
    };

    const addEffects = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (addPokemon) {
        addPokemon(pokemon);
      }
    };

    return (
      <Card onClick={goDetails}>
        <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonNumber>No. {pokemon.id}</PokemonNumber>
        <AddBtn onClick={addEffects}>추가</AddBtn>
      </Card>
    );
  }