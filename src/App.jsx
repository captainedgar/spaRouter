import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Nav from './Pagina/Nav'
import { Datos } from './Conexto/MyContexto'
function App() {
  const url = 'https://www.html6.es/img/rey_'


  return (
    <>
<Datos>
      <BrowserRouter>
       <Nav/>
        <Routes>
         
          <Route path='/src/Pagina/Pagina.jsx'></Route>
        </Routes>
      </BrowserRouter>
</Datos>
    </>
  )
}

export default App
