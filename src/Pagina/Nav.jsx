import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom'
import { MyContexto } from '../Conexto/MyContexto'
function Nav() {
  //const url = 'https://www.html6.es/img/rey_'
  const {kings} = useContext(MyContexto)
  const resultado = kings.map((king, indice)=>(
    <li key={indice} className='kings'><Link to={`/Pagina/${king.nombre.toLowerCase()}`}>{king.nombre}</Link></li>
  ))
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to='/'>Inicio</NavLink></li>
            {resultado}
        </ul>
      </nav>
     
    </div>
  )
}

export default Nav
