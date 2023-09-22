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
    <nav>
      <button onClick={handlerMenu} >Menu</button>

      {mostrarMenu &&
        <ListaMenu lista={data} />
      }

    </nav>
  )
}

export default Menu

