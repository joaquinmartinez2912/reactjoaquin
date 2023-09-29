import React, { useState } from 'react'
//import data from "../data/items.json";
import "../main.css";
import ListaMenu from './ListaMenu';
// import Article from "./Article";
// import Boxapunte from "./Boxapunte";
// import Box from './layouts/Box';

function Menu() {

  const configMenu = {
    configColor: {
      background:'#f4f5fa', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive: 'blue', // Color cuando hace click y se abre un  submenú '#a8a8a8',
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Another Action Nivel1', isFolder: false, id: 148, idPadre: 150 },
      { name: 'sub menu Nivel1', isFolder: true, id: 2, idPadre: 150 },
      { name: 'Action Nivel2', isFolder: false, id: 3, idPadre: 2 },
      { name: 'Another action Nivel2', isFolder: false, id: 4, idPadre: 2 },
      { name: 'sub menu Nivel2', isFolder: true, id: 5, idPadre: 2 },
      { name: 'Another action Nivel3', isFolder: false, id: 55, idPadre: 5 },
      { name: 'something else here Nivel3', isFolder: false, id: 56, idPadre: 5 },
    ],
  }

  const [mostrarMenu, setmostrarMenu] = useState(false)

  const handlerMenu = () => {
    setmostrarMenu(!mostrarMenu)
  }

  return (
    <div>
      <button onClick={handlerMenu} >Menu</button>
        {mostrarMenu &&
          <ListaMenu data={configMenu} />
        }

    </div>
  )
}

export default Menu

