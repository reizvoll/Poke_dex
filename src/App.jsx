// rfc하라고!!!!


import { PokemonEffects } from './context/PokemonEffects';
import Router from './shared/Router'

function App() {

  return (
  <PokemonEffects>
    <Router />
    </PokemonEffects>
  );
}

export default App;
