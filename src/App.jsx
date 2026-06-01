import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SuavePolishedPlaster from './pages/SuavePolishedPlaster'
import SuaveStonePolishedPlaster from './pages/SuaveStonePolishedPlaster'
import BoneChinaPolishedPlaster from './pages/BoneChinaPolishedPlaster'
import SuaveCretePolishedPlaster from './pages/SuaveCretePolishedPlaster'
import InteractPanelSystem from './pages/InteractPanelSystem'
import DuroClayPlaster from './pages/DuroClayPlaster'
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
        <Route
          path="suavestone-polished-plaster"
          element={<SuaveStonePolishedPlaster />}
        />
        <Route
          path="bone-china-polished-plaster"
          element={<BoneChinaPolishedPlaster />}
        />
        <Route
          path="suavecrete-polished-plaster"
          element={<SuaveCretePolishedPlaster />}
        />
        <Route
          path="interact-panel-system"
          element={<InteractPanelSystem />}
        />
        <Route path="duro-clay-plaster" element={<DuroClayPlaster />} />
      </Route>
    </Routes>
  )
}

export default App
