// rfc하라고!!!!

import { PokemonProvider } from './context/PokemonProvider';
import Router from './shared/Router'

function App() {

  return (
  <PokemonProvider>
    <Router />
    </PokemonProvider>
  );
}

export default App;
