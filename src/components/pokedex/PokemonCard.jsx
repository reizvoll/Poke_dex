import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSound from "use-sound";
import GameBoy from '/Gameboy.mp3';
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../../redux/slices/pokemonSlice";
import { toast } from "react-toastify";

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
    const selectedPokemons = useSelector(state => state.pokemon.selectedPokemons)

    const addEffects = () => {
      if (selectedPokemons.find(p => p.id === pokemon.id)) {
        toast.error("이미 선택된 포켓몬입니다.", { icon: <img src="/Warning.png" alt="warning" style={{ width: '24px', height: '24px' }} /> });
      } else if (selectedPokemons.length >= 6) {
        toast.error("최대 6개의 포켓몬만 선택할 수 있습니다.", { icon: <img src="/Warning.png" alt="warning" style={{ width: '24px', height: '24px' }} /> });
      } else {
        dispatch(addPokemon(pokemon));
        toast.success(`${pokemon.korean_name}이(가) 추가되었습니다.`, { icon: <img src="/ForToast.png" alt="added" style={{ width: '24px', height: '24px' }} /> });
      }
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