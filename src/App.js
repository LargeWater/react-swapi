import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarshipPage from './Pages/Starship/StarshipPage';
import StarshipList from './Pages/StarshipList/StarshipList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path="/starship-list" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
