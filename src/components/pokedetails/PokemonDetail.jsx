import styled from 'styled-components'

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

const BackButton = styled.button`
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

const PokemonDetail = ({pokemon, onBack }) => {
  if (!pokemon) {
    return <p>포켓몬을 찾을 수 없습니다.</p>
  }

  return (
    <DetailContainer>
        <PokemonImage src= {pokemon.img_url} alt={pokemon.korean_name} />
        <Title>{pokemon.korean_name}</Title>
        <Description>{pokemon.description}</Description>
        <BackButton onClick={onBack}>뒤로 가기</BackButton>
    </DetailContainer>
  );
};

export default PokemonDetail
