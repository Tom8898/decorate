import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SuavePolishedPlaster from './pages/SuavePolishedPlaster'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="suave-polished-plaster"
          element={<SuavePolishedPlaster />}
        />
      </Route>
    </Routes>
  )
}

export default App
