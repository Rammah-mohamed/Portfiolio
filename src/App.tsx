import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ImdbCaseStudy from './case study/ImdbCaseStudy';
import SaaSCaseStudy from './case study/SaaSCaseStudy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/case-study/imdb-clone" element={<ImdbCaseStudy />} />
        <Route path="/case-study/saas-dashboard" element={<SaaSCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
