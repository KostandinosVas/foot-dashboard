import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import StandingsPage from './pages/StandingsPage';



function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<StandingsPage />} />
    </Routes>
    </Layout>
  )
}

export default App