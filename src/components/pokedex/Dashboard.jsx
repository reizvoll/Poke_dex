import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePokemonContext } from "../../context/usePokemonContext";
import useSound from "use-sound";
import { toast } from "react-toastify";

// 제일 큰거 감싸주는 친구
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// 제목
const Title = styled.h3`
  color: #ffffff;
  margin-bottom: 60px;
  font-weight: normal;
  font-size: 28px;
`;

// 공간 채워지는 부분
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  margin-bottom: 40px;
  gap: 50px;
`;

// 버튼 묶어주는 div
const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 350px;
  margin-bottom: 40px;
  gap: 50px;
`;

// 빈 이미지 화면 (포켓볼 보이는 화면)
const Pokeball = styled.div`
  width: 100px;
  height: 100px;
  background: #2f2f2f url("/Icon.png") no-repeat center / 50px 50px;
  border: 2px dashed #c1c1c1;
  border-radius: 10px;
  margin-bottom: 20px;
`;

// 조합에 들어간 포켓몬 카드 스타일
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

// 카드 내부 이미지 조정 (너무 따로 노는 관계로..)
const PokeballImg = styled.img`
  width: 60px;
  height: 80px;
  background: #fff;
  transform: translateY(30px);
  margin-bottom: 30px;
`;

// 포켓몬 이름
const PokemonName = styled.p`
  font-size: 18px;
  color: #2b2b2b;
  margin: 15px 0;
`;

// 포켓몬 번호
const PokemonNumber = styled.span`
  font-size: 14px;
  color: #777;
`;

// 카드 내부 삭제버튼 (다 같이 통합하면 너무 커지는 이슈때문에..)
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

// 홈 돌아가는 버튼 및 초기화 버튼
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

const Dashboard = () => {
  const { selectedPokemons, removePokemon, resetPokemons } =
    usePokemonContext();
  const nav = useNavigate();
  const [playBackSound] = useSound("/Gameboy.mp3");
  const [playResetSound] = useSound("/Reset.mp3");
  const [playRemoveSound] = useSound("/DeletedSound.mp3");

  // 포켓몬 삭제기능 구현 (사운드 및 알림 추가)
  const RemoveControl = pokemon => {
    removePokemon(pokemon);
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
  };

  // 포켓몬 초기화 기능 구현 (사운드 및 알림 추가)
  const ResetControl = () => {
    resetPokemons();
    playResetSound();
    toast.warn("초기화가 완료되었습니다.", {
      icon: (
        <img
          src="/Reset.png"
          alt="reset"
          style={{ width: "38px", height: "30px" }}
        />
      ),
    });
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
        {Array(6 - selectedPokemons.length)
          .fill(null)
          .map((_, index) => (
            <Pokeball key={`empty-${index}`} />
          ))}
      </Container>
      <BtnGroup>
        <StyledBtn
          onClick={() => {
            playBackSound();
            nav("/");
          }}
        >
          돌아가기
        </StyledBtn>
        <StyledBtn onClick={ResetControl}>초기화</StyledBtn>
      </BtnGroup>
    </DashboardContainer>
  );
};

export default Dashboard;
