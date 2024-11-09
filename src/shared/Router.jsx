// 상남자식으로 가기 위해 여러 페이지처럼 가고싶잖어.
// yarn add react-router-dom 명령어임 기억하셈.
// 라우팅 안에 들어가야 하는 목록들
// 제목
// 도감
// 설명
// 이런 식이니까.. 그래서 이걸 안에 감싸주면서 하자 (이건 그냥 문법이니까 shared부터 외우자 ^-^)
// pages 폴더 -> 여기에 아무것도 없으니 출력되게끔 만들기 위해 컴포넌트 넣어주는 곳.
// 롤코 타이쿤에 길만 만들어진 상태다... 언능 놀이기구 만들자고.
// 단축기.. 뭐였지.. ㅎㅎ.. rfc
// element 가 연결해주는거임 ㅇㅇ.. 그걸로 하셈 ㅇㅇ


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PokeDex from '../pages/PokeDex'
import PokeDetails from '../pages/PokeDetails'
import GlobalStyles from './GlobalStyles'

export default function Router({ selectedPokemons, addPokemon, removePokemon, resetPokemons }) {
  return (
  <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokedex" element={<PokeDex 
        selectedPokemons={selectedPokemons}
        addPokemon={addPokemon}
        removePokemon={removePokemon}
        resetPokemons={resetPokemons}
        />}/>
        <Route path="/pokedetails/:id" element={<PokeDetails />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

