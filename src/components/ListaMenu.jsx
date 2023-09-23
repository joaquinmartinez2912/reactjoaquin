import { useState } from "react";
import "../main.css";

function ListaMenu(props) {
  const datos = props.data

  // Defino una variable con un estado para controlar el submenu que contiene una lista con los datos a mostrar.
  const [estadoSubLista, setestadoSubLista] = useState(false)
  const [estadoSubLista2, setestadoSubLista2] = useState(false)

  // const [veces, setVeces] = useState(0)

  //Defino los manejadores de eventos para mostrar el submenu, no cargo datos con esto, solo abro el submenu
  const handleMostrarSubMenu = (itemId, e) => {
    e.preventDefault();

    setestadoSubLista(!estadoSubLista)
    estadoSubLista2 && 
    setestadoSubLista2(false)
  ;
  };

  const handleSubMenuNivel3 = (itemId, e) => {
    e.preventDefault();
   
    setestadoSubLista2(!estadoSubLista2)

    ;
  };

  return (

    <ul className="main-nav" >

      {datos.menuItems.map((item) => {
        return (
          <div>
          {item.idPadre === datos.idFirstNivel ?
            item.isFolder ? <li
              key={item.id}
            >
                <span onClick={(e) => handleMostrarSubMenu(item.id, e)}>{item.name}</span>
              
                {estadoSubLista &&  
                <ul className="sub-menu-ul.open" style={{
                  left: "0px",
                  top: "20px"
                }}>
                  
                  {datos.menuItems.map((subItem) => {
                    return (
                      item.id === subItem.idPadre ?
                      subItem.isFolder ?
                        <li
                        key={subItem.id}
                        
                        >
                          <span onClick={(e) => handleSubMenuNivel3(subItem.id, e)}>{subItem.name}</span>
                        
                          {estadoSubLista2 &&
                          <ul className="sub-menu-ul.open">
                            {datos.menuItems.map((subItem3) => {
                              return (
                                subItem.id === subItem3.idPadre &&
                                <li>{subItem3.name}</li>
                              )
                            }
                            )}
                          </ul>
                          }
                        </li>
                      :
                      <li
                      key={subItem.id}
                      >
                        {subItem.name}
                      </li>
                      :
                      ""
                    )
                  })
                  }

                </ul>}
              

            </li>

              :
              <li
              key={item.id}
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

