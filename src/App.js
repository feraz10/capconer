
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CustNavbar from './components/CustNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Kids from './components/pages/Kids';
import Women from './components/pages/Women';
import Men from './components/pages/Men';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Cart from './components/pages/Cart';
import Caps from './components/productsPages/Caps';
import Eyewear from './components/productsPages/Eyewear';
import Belts from './components/productsPages/Belts';
import Wallets from './components/productsPages/Wallets';



function App() {
  return (
    <div>
      <CustNavbar />
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cap" element={<Caps />} />
          <Route path="/belt" element={<Belts />} />
          <Route path="/eyewear" element={<Eyewear />} />
          <Route path="/wallets" element={<Wallets />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
