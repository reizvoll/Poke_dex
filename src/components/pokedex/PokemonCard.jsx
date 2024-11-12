import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSound from "use-sound";
import GameBoy from '/Gameboy.mp3';
import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/slices/pokemonSlice";

const Card = styled.div`
  width: 170px;
  height: 240px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const PokemonImg = styled.img`
  width: 60px;
  height: 80px;
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

const SoundEffects = ({ onClick, children }) => {
  const [play] = useSound(GameBoy)
  return (
    <AddBtn onClick={(e) => {
      e.stopPropagation();
      play(); onClick();
    }} >
      {children}
    </AddBtn>
  );
};

export default function PokemonCard({ pokemon }) {

    const nav4 = useNavigate();
    const dispatch = useDispatch();
    const addEffects = () => {
        dispatch(addPokemon(pokemon));
    };

    return (
      <Card onClick={() => nav4(`/pokedetails/${pokemon.id}`)}>
        <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonNumber>No. {pokemon.id}</PokemonNumber>
        <SoundEffects onClick = {addEffects}>추가</SoundEffects>
      </Card>
    );
  }