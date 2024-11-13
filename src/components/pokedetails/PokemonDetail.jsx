import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../../datas/data";
import COLOR_DATA from "../../datas/colorData";
import useSound from "use-sound";
import {
  addPokemon,
  removePokemon,
} from "../../redux/config/slices/pokemonSlice";
import { toast } from "react-toastify";

// 세부 페이지 제이이일 큰 부분 (모든 영역 감싸는 부분)
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
`;

// 포켓몬 이미지
const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

// 포켓몬 이름
const Title = styled.h1`
  color: #ffffff;
  font-size: 24px;
`;

// 포켓몬 타입 들어가는 공간
const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 10px;
`;

// 포켓몬 타입박스
const TypeBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border: 3px solid ${({ borderColor }) => borderColor};
  color: #fff;
  width: 70px;
  height: 25px;
  border-radius: 15px;
  font-size: 16px;
`;

// 포켓몬 설명
const Description = styled.p`
  color: #e2e2e2;
  font-size: 16px;
`;

// 버튼 그룹화하여 정렬
const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  margin-bottom: 40px;
  gap: 40px;
`;

// 버튼 스타일 동일해서 그냥 합쳐버림..
const Btns = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: transparent;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 15px;
  font-family: "DungGeunMo";
  display: block;
  width: 100px;
  height: 38px;
  &:hover {
    background-color: #8b0000;
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const selectedPokemons = useSelector(state => state.pokemon.selectedPokemons);
  const pokemon = MOCK_DATA.find(p => p.id === parseInt(id));
  const added = selectedPokemons.some(p => p.id === pokemon.id);
  const [playAddSound] = useSound("/Gameboy.mp3");
  const [playRemoveSound] = useSound("/DeletedSound.mp3");

  // 타입 별 색상 변동을 위한 코드
  const getTypeColors = type => {
    const colorInfo = COLOR_DATA.find(color => color.type === type);
    if (colorInfo) {
      return {
        bgColor: colorInfo.bg_color,
        borderColor: colorInfo.border_color,
      };
    } else {
      return {};
    }
  };

  // falsy 값 먼저, 그 다음 truthy 값 (toast 기능 추가부분)
  const addRemove = () => {
    if (added) {
      dispatch(removePokemon(pokemon));
      playRemoveSound();
      toast.info(`${pokemon.korean_name}이(가) 삭제되었습니다.`, {
        icon: (
          <img
            src="/ForToast.png"
            alt="deleted"
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
            alt="sucess"
            style={{ width: "24px", height: "24px" }}
          />
        ),
      });
    }
  };

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <Title>{pokemon.korean_name}</Title>
      <TypeContainer>
        {pokemon.types.map(type => {
          const { bgColor, borderColor } = getTypeColors(type);
          return (
            <TypeBox key={type} bgColor={bgColor} borderColor={borderColor}>
              {type}
            </TypeBox>
          );
        })}
      </TypeContainer>
      <Description>{pokemon.description}</Description>
      <BtnGroup>
        <Btns onClick={addRemove} added={added}>
          {added ? "삭제하기" : "추가하기"}
        </Btns>
        <Btns onClick={() => nav("/pokedex")}>뒤로 가기</Btns>
      </BtnGroup>
    </DetailContainer>
  );
};

export default PokemonDetail;
