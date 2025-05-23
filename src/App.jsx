import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarLayout from './components/SidebarLayout';
import Home from './pages/Home';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import ProductManagement from './pages/ProductManagement';

function App() {
  return (
    <Router>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/product-management" element={<ProductManagement />} />
        </Routes>
      </SidebarLayout>
    </Router>
  );
}

export default App;
