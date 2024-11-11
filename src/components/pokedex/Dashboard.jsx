// rafc 단축기로 생성하자.. 우리는 배운 똑똑이들이잖어.
// 오류 : 카드 추가 중복되면 alert 생성 안됨
// 상세페이지 넘어갔다가 오면 없어짐! (로컬스토리지 안해서 그런가..?)

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonList from "./PokemonList";
import { usePokemonContext } from "../../context/usePokemonContext";

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

// background: 색상 url(이미지주소값) 반복설정 위치 / 크기
// background-size: 50px 50px;
// background-repeat: no-repeat;
// background-position: center;
// background-color: #fff;

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
  width: 120px;
  height: auto;
  background: #fff;
  transform: translateY(15px);
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
  const { selectedPokemons, removePokemon, resetPokemons, addPokemon } =
    usePokemonContext();
  const nav2 = useNavigate();

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬 조합을 구성해보자!</Title>
      <Container>
        {selectedPokemons.map(pokemon => (
          <CatchedList key={pokemon.id}>
            <PokeballImg src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonName>{pokemon.korean_name}</PokemonName>
            <PokemonNumber>No. {pokemon.id}</PokemonNumber>
            <RemoveBtn onClick={() => removePokemon(pokemon)}>삭제</RemoveBtn>
          </CatchedList>
        ))}
        {Array.from({ length: 6 - selectedPokemons.length }).map((_, index) => (
          <Pokeball key={`empty-${index}`} />
        ))}
      </Container>
      <BtnGroup>
        <StyledBtn onClick={() => nav2(-1)}>돌아가기</StyledBtn>
        <StyledBtn onClick={resetPokemons}>초기화</StyledBtn>
      </BtnGroup>
      <PokemonList
        addPokemon={addPokemon}
        removePokemon={removePokemon}
        selectedPokemons={selectedPokemons}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
