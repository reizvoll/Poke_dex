import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSound from "use-sound";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../../redux/config/slices/pokemonSlice";
import { toast } from "react-toastify";

// 카드 전체
const Card = styled.div`
  width: 160px;
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

// 카드 이미지 (너무 커서 잘리는 관계로 크기 고정)
const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// 포켓몬 이름
const PokemonName = styled.h3`
  font-size: 18px;
  color: #2b2b2b;
  margin: 4px 0;
`;

// 포켓몬 번호
const PokemonNumber = styled.span`
  font-size: 14px;
  color: #777;
`;

// 추가버튼
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
  font-family: "DungGeunMo";
  margin: 10px 10px;

  &:hover {
    background-color: #8b0000;
  }
`;

export default function PokemonCard({ pokemon }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const selectedPokemons = useSelector(state => state.pokemon.selectedPokemons);
  const [playAddSound] = useSound("/Gameboy.mp3");
  const [playErrorSound] = useSound("/DeletedSound.mp3");

  // 클릭 시, 나오는 기능들 정리
  const addEffects = () => {
    if (selectedPokemons.find(p => p.id === pokemon.id)) {
      playErrorSound();
      toast.error("이미 선택된 포켓몬입니다.", {
        icon: (
          <img
            src="/Warning.png"
            alt="warning"
            style={{ width: "24px", height: "24px" }}
          />
        ),
      });
    } else if (selectedPokemons.length >= 6) {
      playErrorSound();
      toast.error("최대 6개의 포켓몬만 선택할 수 있습니다.", {
        icon: (
          <img
            src="/Warning.png"
            alt="warning"
            style={{ width: "24px", height: "24px" }}
          />
        ),
      });
    } else {
      dispatch(addPokemon(pokemon));
      playAddSound();
      toast.success(`${pokemon.korean_name}이(가) 추가되었습니다.`, {
        icon: (
          <img
            src="/ForToast.png"
            alt="added"
            style={{ width: "24px", height: "24px" }}
          />
        ),
      });
    }
  };

  return (
    <Card onClick={() => nav(`/pokedetails/${pokemon.id}`)}>
      <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonNumber>No. {pokemon.id}</PokemonNumber>
      <AddBtn
        onClick={e => {
          e.stopPropagation();
          addEffects();
        }}
      >
        추가
      </AddBtn>
    </Card>
  );
}
