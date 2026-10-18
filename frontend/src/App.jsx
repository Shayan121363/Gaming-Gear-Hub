import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Gear from './pages/Gear';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/gear/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
