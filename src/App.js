import { BrowserRouter } from 'react-router-dom';
import { UseRouter } from './components/Router';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <UseRouter />
    </BrowserRouter>
  );
}

export default App;
