import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/menus/menu'
import Home from './features/home/pages/Home'
import Filmes from './features/filme/pages/Filmes'
import Salas from './features/salas/pages/salas'
import Sessoes from './features/sessoes/pages/sessoes'
import Ingressos from './features/ingressos/pages/ingresso'
import { AppRoutes } from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    
    </BrowserRouter>
      {/* <Home /> */}
      {/* <Filmes /> */}
      {/* <Salas /> */}
      {/* <Sessoes />  */}
      {/* <Ingressos /> */}
    </>
  )
}

export default App
