import PCExplorer from "./components/PCExplorer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PC from './pages/PC';
import Fase1 from './pages/Fase1';
import Fase2 from './pages/Fase2';
import Fase3 from './pages/Fase3';
import Considerazioni from './pages/Considerazioni';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    //<>
    <BrowserRouter>
    <ScrollToTop />
    <div className="relative scroll-smooth pt-24 min-h-screen bg-[#0B0F19] text-white overfow-y-hidden">
      
      <Navbar />
      <Routes>
         <Route path="/"               element={<HomePage />} />
         <Route path="/pc"             element={<PC />} />
         <Route path="/fase1"          element={<Fase1 />} />
         <Route path="/fase2"          element={<Fase2 />} />
         <Route path="/fase3"          element={<Fase3 />} />
         <Route path="/considerazioni" element={<Considerazioni />} />
      </Routes>
    </div>
    </BrowserRouter>
   // </>
  );
}
