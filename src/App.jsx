import { PokemonProvider } from './context/PokemonProvider';
import Router from './shared/Router'
import StyledToastContainer from '../utils/toastcontainer';

function App() {

  return (
  <PokemonProvider>
    <Router />
    <StyledToastContainer />
  </PokemonProvider>
  );
}

export default App;
