import { useState } from "react";
import "../main.css";
import ItemMenu from "./Itemmenu";
import SubListaMenu2 from "./SubListaMenu2";

function ListaMenu(props) {
  const datos = props.data

  const [estadoSubLista, setestadoSubLista] = useState([])
  const [estadoMenu , setestadoMenu] = useState(false)

  const handleMostrarSubMenu = (e, SubMenuId) => {
    e.preventDefault();
    setestadoSubLista((prev) => {
      const arr = [...prev]
      setestadoMenu(!estadoMenu)
      arr[SubMenuId] = estadoMenu
      return arr
    })
      ;
  };

  return (
    <ul className="main-nav"
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
                  <span onClick={(e) => handleMostrarSubMenu(e, item.id)}>
                    <div>
                      {item.name}
                      <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"15px"} fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z" />
                      </svg>
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
                >{item.name}
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

export default ListaMenu

