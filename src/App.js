import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Zoo from './components/animal/zoo';
import AnimalDetail from './components/animal/details';
import Header from './components/header/header';

function App() {
  return (

    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Zoo />} />
          <Route path="/Zoo" element={<Zoo />} />
          <Route path="/AnimalDetail/:id" element={<AnimalDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>

  );
}

export default App;
