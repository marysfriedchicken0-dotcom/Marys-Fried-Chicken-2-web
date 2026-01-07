import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Ubicaciones } from './pages/Ubicaciones';
import { Nosotros } from './pages/Nosotros';
import { Resenas } from './pages/Resenas';
import { Contacto } from './pages/Contacto';
import { Pedidos } from './pages/Pedidos';
import { Admin } from './pages/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ubicaciones" element={<Ubicaciones />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/resenas" element={<Resenas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
