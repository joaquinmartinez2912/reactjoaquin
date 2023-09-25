import React, { useState } from 'react'
import data from "../data/items.json";
import "../main.css";
import ListaMenu from './ListaMenu';

function Menu() {

  const configMenu = {
    configColor: {
      background: '#f4f5fa', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive: '#a8a8a8', // Color cuando hace click y se abre un  submenú
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Another Action Nivel1', isFolder: false, id: 148, idPadre: 150 },
      { name: 'agregado Nivel1', isFolder: false, id: 149, idPadre: 150 },
      { name: 'sub menu Nivel1', isFolder: true, id: 2, idPadre: 150 },
      { name: 'Action Nivel2', isFolder: false, id: 3, idPadre: 2 },
      { name: 'Another action Nivel2', isFolder: false, id: 4, idPadre: 2 },
      { name: 'sub menu Nivel2', isFolder: true, id: 5, idPadre: 2 },
      { name: 'agregado Nivel2', isFolder: false, id: 44, idPadre: 2 },
      { name: 'Another action Nivel3', isFolder: false, id: 55, idPadre: 5 },
      { name: 'something else here Nivel3', isFolder: false, id: 56, idPadre: 5 },
      { name: 'agregado Nivel3', isFolder: false, id: 57, idPadre: 5 },
    ],
  }

  const [mostrarMenu, setmostrarMenu] = useState(false)

  const handlerMenu = () => {
    setmostrarMenu(!mostrarMenu)
  }

  return (
    <div>
      <button onClick={handlerMenu} >Menu</button>
      <nav style={{background: configMenu.configColor.background}}>


        {mostrarMenu &&
          <ListaMenu data={configMenu} />
        }

      </nav>
    </div>
  )
}

export default Menu

