import { Routes, Route } from 'react-router-dom'
import { RootPage } from './pages/RootPage'
import { StorePage } from './pages/StorePage'
import { AboutPage } from './pages/AboutPage'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='/store' element={<StorePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
