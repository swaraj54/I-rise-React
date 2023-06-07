
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
        <Route path='/kids' element={<Kids items={['Kuchbi', 'Hello', 'World',"Swaraj"]}  />} />
        <Route path='/mens' element={<Mens images={["data:image/jpeg;base64,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","data:image/png;base64,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","data:image/png;base64,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"]} />} />
        <Route path='/women' element={<Women isLogged="false" />} />
      </Routes>

    </div>
  );
}

export default App;
