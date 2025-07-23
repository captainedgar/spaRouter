import React, { useContext } from 'react'
import {useParams }from 'react-router-dom'
import { MyContexto } from '../Conexto/MyContexto'
function Pagina() {
    const url = 'https://www.html6.es/img/rey_'
    const {kings} = useContext(MyContexto)
    const rey = useParams()
    const reyes = kings.map((king, indice)=> king => king.nombre.ToLowerCase()(
      <img key={indice} src={`${url}${king.nombre}.png`} />
    ))
  return (
    <div>
      {rey.direccion}
      <div>{reyes}</div>

    </div>
  )
}

export default Pagina
