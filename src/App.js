import './App.css';
import { Routes, Route } from 'react-router-dom';
import Zoo from './components/animal/zoo';
import AnimalDetail from './components/animal/details';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Zoo />} />
        <Route path="/Zoo" element={<Zoo />} />
        <Route path="/AnimalDetail" element={<AnimalDetail />} />
      </Routes>
    </div>
  );
}

export default App;
