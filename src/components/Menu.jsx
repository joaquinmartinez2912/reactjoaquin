import React, { useState } from 'react'
import data from "../data/items.json";
import "../main.css";
import ListaMenu from './ListaMenu';

function Menu() {
  
  const [mostrarMenu, setmostrarMenu] = useState(true)

  const handlerMenu = () => {
    setmostrarMenu(!mostrarMenu)
  }
  
  return (
      <aside>
        <button onClick={handlerMenu} >Menu</button>

        {mostrarMenu &&    
        <ListaMenu lista={data} /> 
        }

      </aside>
  )
}

export default Menu

