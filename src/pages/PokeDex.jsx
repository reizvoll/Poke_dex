import { useLocation } from 'react-router-dom';
import Dashboard from '../components/pokedex/Dashboard'
import PokemonList from '../components/pokedex/PokemonList';

// 버튼을 누르면 가지게 하고 싶지만.. 이미 기능이 있어서 이곳으로 넘어갈 때 자동으로 켜지도록 audio 태그 추가
// 근데 이거 Details에서 돌아가도 나온다... 이걸 어쩌지 ㅠㅡㅠ
// link 태그 -> state 전달이 가능하다!

const PokeDex = () => {

  const { state } = useLocation();
  console.log(state);

  return (
    <>
    <audio src='/Gameboy.mp3' autoPlay ={state.fromHome} /> 
    <Dashboard  />
    <PokemonList />
    </>
  );
}

export default PokeDex
