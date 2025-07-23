import React, { useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { MyContexto } from '../Conexto/MyContexto'
function Nav() {
  const {kings} = useContext(MyContexto)
  const resultado = kings.map((king, indice)=>(
    <li key={indice} className='kings'><Link to={king.nombre}>{king.nombre}</Link></li>
  ))
  return (
    <div>
      <nav>
        <ul>
          <li><Link >Inicio</Link></li>
            {resultado}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
