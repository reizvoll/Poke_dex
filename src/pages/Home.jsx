import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useSound from 'use-sound';

// Home 전체 영역
const HomeContainer = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-65%);
`;

// 로고 이미지
const Logo = styled.img`
width: 300px;
height: auto;
`;

// 포켓몬은 뭘까요오 글
const Intro = styled.h3`
  color: #fff;
  margin-bottom: 30px;
  font-size: 34px;
  font-weight: normal;
`;

// '시작하기' 버튼
const StartBtn = styled.button`
  font-family: 'DungGeunMo';
  background-color: red;
  color: white;
  border: transparent;
  border-radius: 10px;
  padding: 10px 24px;
  font-size: 21px;
  font-weight: bold;
  transform: translateX(-3px);
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const Home = () => {
  const nav =useNavigate();
  const [play] = useSound('/Gameboy.mp3')

  const ClickStart =() => {
    play();
    nav('/PokeDex');
  }
  
  return (
    <HomeContainer>
      <Logo src='/Logo.png' alt='pokedex_img' />
      <Intro>오늘의 포켓몬은 뭘까요오-?</Intro>
      <StartBtn onClick={ClickStart}> 도감 시작하기! </StartBtn>
    </HomeContainer>
  )
}

export default Home
