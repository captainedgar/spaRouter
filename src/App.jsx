import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Nav from './Pagina/Nav'
import Rey from './Pagina/Rey'
import { Datos } from './Conexto/MyContexto'
import Pagina from './Pagina/Pagina'
function App() {



  return (
    <>
<Datos>
      <BrowserRouter>
       <Nav/>
        <Routes>
         
          
          <Route path='/Pagina/' element={<Nav/>} ></Route>
          <Route path='/Pagina/:reyes' element={<Rey/>} ></Route>
     
         <Route path='/' element={<Pagina/>}></Route>

        
        </Routes>
      </BrowserRouter>
</Datos>
    </>
  )
}

export default App
