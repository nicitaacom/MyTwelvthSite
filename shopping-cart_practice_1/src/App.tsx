import {Routes,Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Store} from "./pages/Store";
import {About} from "./pages/About";
import {Container, Nav} from "react-bootstrap";
import {Navbar} from "./components/Navbar";

function App() {

  return (
    <>
    <Navbar/>
    <Container className='mb-4'>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/store' element={<Store/>}/>
     <Route path='/about' element={<About/>}/>
   </Routes>
    </Container>
    </>
  )
}

export default App
