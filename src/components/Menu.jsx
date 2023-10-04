import React, { useState, useEffect, useRef } from 'react';
import "../main.css";
import ItemMenu from "./Itemmenu";
import SubListaMenu2 from "./SubListaMenu2";

function Menu(props) {
  const datos = props.data

  const [estadoSubLista, setestadoSubLista] = useState([])
  const menuRef = useRef(null);
 
  const handleMostrarSubMenu = (e, SubMenuId) => {
    e.preventDefault();
    setestadoSubLista((prev) => {
      const arr = [...prev]
      for (let i = 0; i < arr.length; i++) {
        if (i !== SubMenuId) {
          arr[i] = false; 
        }
      }
      arr[SubMenuId] = !arr[SubMenuId]
      return arr
    })
      ;
  };

  useEffect(() => {
    const handleClickPorFuera = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setestadoSubLista(Array(datos.menuItems.length).fill(false));
      }
    };
    document.addEventListener('click', handleClickPorFuera);
    return () => {
      document.removeEventListener('click', handleClickPorFuera);
    };
  }, [datos.menuItems]);

  return (
    <ul className="main-nav"
      ref={menuRef}
      style={
        {
          background: datos.configColor.background,
        }
      } >
      {datos.menuItems.map((item) => {
        return (
          <div>
            {item.idPadre === datos.idFirstNivel ?
              item.isFolder ?              
                <ItemMenu
                  llave={item.id}
                  clase="li-Menu"
                  style={{
                    background: datos.configColor.itemBackground,
                    color: estadoSubLista[item.id] ? datos.configColor.itemActive : datos.configColor.itemColor
                  }}
                >
                  <span onClick={(e) => handleMostrarSubMenu(e, item.id)} style={{width:"200px"}}>
                    <div>
                      {item.name}
                      {estadoSubLista[item.id] ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg>

                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                      }
                    </div>
                  </span>
                  {estadoSubLista[item.id] &&
                    <SubListaMenu2 datos={datos} Menu={item.id} ></SubListaMenu2>
                  }
                </ItemMenu>
                : 
                <ItemMenu
                  llave={item.id}
                  clase="li-Menu"
                  style={{ color: datos.configColor.itemColor }}
                > <span> {item.name} </span>
                </ItemMenu> 
              :
              ""}
          </div>
        )
      })
      }
    </ul>
  )
}

export default Menu

