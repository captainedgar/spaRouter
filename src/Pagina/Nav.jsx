import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to='#'>Hola</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
