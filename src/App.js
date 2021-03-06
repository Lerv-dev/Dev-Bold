import './scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'
import Main from './components/MainComponent.js';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );

}


export default App;
