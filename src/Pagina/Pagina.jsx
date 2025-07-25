import React, { useContext } from 'react'
//import {useParams }from 'react-router-dom'
import { MyContexto } from '../Conexto/MyContexto';

import { Link } from 'react-router-dom';
function Pagina() {
    const url = 'https://www.html6.es/img/rey_'
    const {kings} = useContext(MyContexto)

   
  return (
   <div>
     {kings.map((king, indice)=>(
      
  <Link to={`/pagina/${king.nombre.toLowerCase()}`}><img key={indice} src={`${url}${king.nombre.toLowerCase()}.png`} alt={king.nombre}/></Link>
 


     ))}
     </div> 
 
  )
}

export default Pagina
