// rafc 단축기로 생성하자.. 우리는 배운 똑똑이들이잖어.
// 제발 yarn add redux바로 하지말고 react-redux 하기. (import가 잘 안됨!)

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removePokemon, resetPokemons } from "../../redux/slices/pokemonSlice";
import { toast } from "react-toastify";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h3`
  color: #ffffff;
  margin-bottom: 60px;
  font-weight: normal;
  font-size: 28px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  margin-bottom: 40px;
  gap: 50px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 350px;
  margin-bottom: 40px;
  gap: 50px;
`;

const Pokeball = styled.div`
  width: 100px;
  height: 100px;
  background: #2f2f2f url("/Icon.png") no-repeat center / 50px 50px;
  border: 2px dashed #c1c1c1;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CatchedList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-weight: bold;
  width: 180px;
  height: 240px;
  background: #fff;
  color: #2b2b2b;
  border-radius: 8px;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const PokeballImg = styled.img`
  width: 60px;
  height: 80px;
  background: #fff;
  transform: translateY(30px);
  margin-bottom: 30px;
`;

const PokemonName = styled.p`
  font-size: 18px;
  color: #2b2b2b;
  margin: 15px 0;
`;

const PokemonNumber = styled.span`
  font-size: 14px;
  color: #777;
`;

const StyledBtn = styled.button`
  font-family: "DungGeunMo";
  font-weight: bold;
  background-color: #ff0000;
  color: white;
  border: transparent;
  border-radius: 10px;
  font-size: 18px;
  display: block;
  width: 120px;
  height: 38px;
  cursor: pointer;
  &:hover {
    background-color: #8b0000;
  }
`;

const RemoveBtn = styled.button`
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

const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector((state) => state.pokemon.selectedPokemons);
  const nav2 = useNavigate();


  const RemoveControl = (pokemon) => {
    dispatch(removePokemon(pokemon));
    toast.info(`${pokemon.korean_name}이(가) 삭제되었습니다.`, { icon: <img src="/ForToast.png" alt="deleted" style={{width: '24px', height: '24px'}}/> });
  };

  const ResetControl = () => {
    dispatch(resetPokemons());
    toast.warn('초기화가 완료되었습니다.', { icon: <img src="/Reset.png" alt="reset" style={{width: '38px', height: '30px'}}/> });
  };

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬 조합을 구성해보자!</Title>
      <Container>
        {selectedPokemons.map(pokemon => (
          <CatchedList key={pokemon.id}>
            <PokeballImg src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonName>{pokemon.korean_name}</PokemonName>
            <PokemonNumber>No. {pokemon.id}</PokemonNumber>
            <RemoveBtn onClick={() => RemoveControl(pokemon)}>삭제</RemoveBtn>
          </CatchedList>
        ))}
        {Array(6 - selectedPokemons.length).fill(null).map((_, index) => (
            <Pokeball key={`empty-${index}`} />
          ))}
      </Container>
      <BtnGroup>
        <StyledBtn onClick={() => nav2(-1)}>돌아가기</StyledBtn>
        <StyledBtn onClick={ResetControl}>초기화</StyledBtn>
      </BtnGroup>
    </DashboardContainer>
  );
};

export default Dashboard;
