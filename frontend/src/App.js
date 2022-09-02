import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import {BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/cart/:id" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" exact element={<Home/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
