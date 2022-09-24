import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <div className="app">
      <main>
      <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen />} />
      </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
