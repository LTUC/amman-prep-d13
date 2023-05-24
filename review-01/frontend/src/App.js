import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './layout';
import Home from './pages/home/home';
import About from './pages/about/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
