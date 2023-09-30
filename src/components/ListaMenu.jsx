import { useState } from "react";
import "../main.css";
import ItemMenu from "./Itemmenu";
import SubListaMenu3 from "./SubListaMenu3";

function ListaMenu(props) {
  const datos = props.data

  // Defino una variable con un estado para controlar el submenu que contiene una lista con los datos a mostrar.
  const [estadoSubLista, setestadoSubLista] = useState(false)
  const [estadoSubLista2, setestadoSubLista2] = useState(false)

  // const [veces, setVeces] = useState(0)

  //Defino los manejadores de eventos para mostrar el submenu, no cargo datos con esto, solo abro el submenu
  const handleMostrarSubMenu = (e) => {
    e.preventDefault();

    setestadoSubLista(!estadoSubLista)
    estadoSubLista2 &&
      setestadoSubLista2(false)
      ;
  };

  const handleSubMenuNivel3 = (e) => {
    e.preventDefault();
    setestadoSubLista2(!estadoSubLista2)
    // setVeces(veces+1)
    // alert(veces)
      ;
  };

  return (

    <ul key={"1"} className="main-nav" style={
      {
        background: datos.configColor.background,
      }
    } >

      {datos.menuItems.map((item) => {
        return (
          <div>
            {item.idPadre === datos.idFirstNivel ?
              item.isFolder ? <li
                className="li-Menu"
                key={item.id}
                style={{
                  background: datos.configColor.itemBackground,
                  color: estadoSubLista ? datos.configColor.itemActive : datos.configColor.itemColor
                }
                }
              >
                <span onClick={(e) => handleMostrarSubMenu(e)}>
                  <div>
                    {item.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"15px"} fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z" />
                    </svg>
                  </div>
                </span>

                {estadoSubLista &&
                  <ul key={"2"} className="ul-segundo-nivel">
                    {datos.menuItems.map((subItem) => {
                      return (
                        item.id === subItem.idPadre ?
                          subItem.isFolder ?
                            <ItemMenu llave={subItem.id}
                              style={{
                                background: datos.configColor.itemBackground,
                                color: estadoSubLista2 && datos.configColor.itemActive
                              }}
                              onMouseEnter={(e) => handleSubMenuNivel3(e)}
                              onMouseLeave={(e) => handleSubMenuNivel3(e)}
                            >
                              <div>
                                <span>
                                  {subItem.name}
                                  <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"15px"} fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z" />
                                  </svg>
                                </span>
                              </div>
                              {estadoSubLista2 &&
                                <SubListaMenu3 data={datos.menuItems} subMenu2={subItem.id} >  </SubListaMenu3>
                              }
                            </ItemMenu> 
                            :
                            <ItemMenu llave={subItem.id} > {subItem.name} </ItemMenu> 
                          :
                          ""
                      )
                    })
                    }
                  </ul>}
              </li>

                : // Este es el negativo del menu nivel 1. Lo que pasa si isfolder = false 
                <li
                  key={item.id}
                  className="li-Menu"
                  style={{ color: datos.configColor.itemColor }}
                >

                  {item.name}

                </li>
              :
              ""}
          </div>
        )

      })
      }
    </ul>
  )
}

export default ListaMenu

