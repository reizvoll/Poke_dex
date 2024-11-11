// 뭐라도 뜨게끔 만들어보자고요 ye?
// rafc 단축기로 만들기!
// 박민준의 미션 : 음악 집어넣기.. 터미널 yarn add use-sound 입력하여 useSound 활용 가능...
//(이런걸 하는 이유는 도대체 뭘까.. 이해를 할 수 업네 진짜)
// 음악은 audio 태그만 있으면 된다... 누구처럼 양아치마냥 설치 안해도 된다 ^-^

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-65%);
`;

const Logo = styled.img`
width: 300px;
height: auto;
`;

const Intro = styled.h3`
  color: #fff;
  margin-bottom: 30px;
  font-size: 34px;
  font-weight: normal;
`;

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

  const ClickStart =() => {
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
