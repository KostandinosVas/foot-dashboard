import { Routes, Route } from 'react-router-dom';
import StandingsPage from './pages/StandingsPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<StandingsPage />} />
    </Routes>
  )
}

export default App