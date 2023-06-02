
import './App.css';
import Kids from './components/Kids';
import Mens from './components/Mens';
import Women from './components/Women';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/women' element={<Women />} />
      </Routes>

    </div>
  );
}

export default App;
