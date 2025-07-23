import React from 'react'
import useParams from 'react-router-dom'
function Pagina() {
    const rey = useParams()
  return (
    <div>
      {rey.direccion}
    </div>
  )
}

export default Pagina
