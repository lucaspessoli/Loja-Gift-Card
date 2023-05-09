import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import LoginPage from './components/LoginPage';
import Carrinho from './components/Carrinho';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
            <Route path="/register" element={<LoginPage />} />
            <Route path="/cart" element={<Carrinho />}  /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
