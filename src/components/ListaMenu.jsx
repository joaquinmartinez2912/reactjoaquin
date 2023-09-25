import { useState } from "react";
import "../main.css";

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
                <span onClick={(e) => handleMostrarSubMenu(e)}>{item.name}</span>
              
                {estadoSubLista &&  
                <ul className="ul-segundo-nivel">
                  
                  {datos.menuItems.map((subItem) => {
                    return (
                      item.id === subItem.idPadre ?
                      subItem.isFolder ?
                        <li
                        key={subItem.id}
                        onMouseEnter={(e) => handleSubMenuNivel3(e)}
                        onMouseLeave={(e) => handleSubMenuNivel3(e)}
                        >
                          <span>{subItem.name}</span>
                        
                          {estadoSubLista2 &&
                          <ul className="ul-tercer-nivel">
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

