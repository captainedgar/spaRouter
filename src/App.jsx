import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Nav from './Pagina/Nav'
import { Datos } from './Conexto/MyContexto'
function App() {



  return (
    <>
<Datos>
      <BrowserRouter>
       <Nav/>
        <Routes>
         
          <Route path='/src/Pagina/Pagina.jsx' ></Route>
          <Route path='/src/Pagina/:rey' ></Route>
        </Routes>
      </BrowserRouter>
</Datos>
    </>
  )
}

export default App
