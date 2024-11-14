import { useNavigate, useParams } from 'react-router-dom';
import PokemonDetail from '../components/pokedetails/PokemonDetail';
import MOCK_DATA from '../datas/data';

const PokeDetails = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const pokemon = MOCK_DATA.find(p => p.id === parseInt(id));
  
  return <PokemonDetail pokemon={pokemon} onBack={() => nav('/pokedex')} />;
};

export default PokeDetails;
