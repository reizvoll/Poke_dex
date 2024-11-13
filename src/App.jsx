import { Provider } from 'react-redux';
import store from './redux/config/store';
import Router from './shared/Router'
import StyledToastContainer from './utils/toastcontainer';

function App() {

  return (
  <Provider store={store}>
    <Router />
    <StyledToastContainer />
  </Provider>
  );
}

export default App;
