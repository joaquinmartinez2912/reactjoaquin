import React, { useState } from 'react'
import data from "../data/items.json";
import "../main.css";
import ListaMenu from './ListaMenu';

function Menu() {

  const [mostrarMenu, setmostrarMenu] = useState(false)

  const handlerMenu = () => {
    setmostrarMenu(!mostrarMenu)
  }

  return (
    <div>
      <button onClick={handlerMenu} >Menu</button>
      <nav>


        {mostrarMenu &&
          <ListaMenu lista={data} />
        }

      </nav>
    </div>
  )
}

export default Menu

