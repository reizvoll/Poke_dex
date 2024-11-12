import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import MOCK_DATA from '../../datas/data';
import { addPokemon, removePokemon } from '../../redux/slices/pokemonSlice';
import { toast } from 'react-toastify';

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-65%);
`;

const PokemonImage = styled.img`
width: 150px;
height: 150px;
`;

const Title = styled.h1`
color: #ffffff;
font-size: 24px;
`;

const Description =styled.p`
color: #e2e2e2;
font-size: 16px;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  margin-bottom: 40px;
  gap : 40px
`;

const Btns = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: transparent;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 15px;
  font-family: 'DungGeunMo';
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
  const nav5 = useNavigate();
  const selectedPokemons = useSelector(state => state.pokemon.selectedPokemons);
  const pokemon = MOCK_DATA.find(p => p.id === parseInt(id) );
  const added = selectedPokemons.some((p) => p.id === pokemon.id);

  // 먼저 falsy 값 주고 그 다음이 truthy한 값
  const addRemove = () => {
    if (added) {
      dispatch(removePokemon(pokemon));
      toast.info(`${pokemon.korean_name}이(가) 삭제되었습니다.`, {icon: <img src='/ForToast.png' alt='deleted' style={{width: '24px', height: '24px'}} />,});
    } else {
      dispatch(addPokemon(pokemon));
      toast.success(`${pokemon.korean_name}이(가) 추가되었습니다.`, {icon: <img src='/ForToast.png' alt='sucess' style={{width: '24px', height: '24px'}} />,});
    }
  }

  return (
    <DetailContainer>
        <PokemonImage src= {pokemon.img_url} alt={pokemon.korean_name} />
        <Title>{pokemon.korean_name}</Title>
        <Description>{pokemon.description}</Description>
        <BtnGroup>
        <Btns onClick={() => nav5('/pokedex')}>뒤로 가기</Btns>
        <Btns onClick={addRemove} added={added}>
          {added ? '삭제하기' : '추가하기'}
        </Btns>
        </BtnGroup>
    </DetailContainer>
  );
};

export default PokemonDetail
