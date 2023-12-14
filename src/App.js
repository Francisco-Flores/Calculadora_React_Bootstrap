import logo from './logo.svg';
import './App.css';
import Suma from './pages/calculadora';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
          <div>
            <Link to="/">
              <Button variety="primary">Inicio</Button>
            </Link>
            <Link to="/calculadora">  
              <Button variety="primary">Calculadora</Button>
            </Link>
          </div>
          <Routes>
          <Route path="/calculadora" element={<Suma/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
