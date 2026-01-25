
import './tw-styles.css'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import PlaqueModal from './components/PlaqueModal'
import { useState } from 'react';

function App() {
 const [count, setCount] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)

return (
  <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
<TitleBar title="📚 OpenPlaques Recommended Reading" />
<MapDisplay longitude={-11.479} latitude={7.05213} zoom={16} />
{isModalOpen ? <PlaqueModal /> : null}
  </div>
)
}

export default App
