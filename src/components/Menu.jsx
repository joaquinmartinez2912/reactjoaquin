import React, { useState, useEffect, useRef } from 'react';
import "../main.css";
import ItemMenu from "./Itemmenu";
import SubListaMenu2 from "./SubListaMenu2";

function Menu(props) {
  const datos = props.data

  const [estadoSubLista, setestadoSubLista] = useState([])
  const menuRef = useRef(null); //Ref que va a apuntar a la UL con el objetivo de diferenciarla del resto del DOM.
 
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

  // Uso el useEffect para manejar el evento secundario que va a ser el click por fuera de la UL del menu.
  useEffect(() => {
    // Defino el manejador de evento que va a actuar cuando haya un cambio en las dependencias (estadoSubLista va a cambiar en cada click)
    // Si viene de la UL, lo captura dos veces, solo que en este manejador de evento, no pasa la condicion del If.
    const handleClickPorFuera = (e) => {
      // Defino si el click en cuestion viene de afuera de la UL. Verifica que el elemento del DOM al que corresponde el evento sea el contrario al que apunta menuref
      // Si es verdadero, que no es cierto que el evento ocurrio en la UL
      if (!menuRef.current.contains(e.target)) {
        // Vuelvo a estadoSubLista al valor inicial
        setestadoSubLista([]);
      }
    };
    // Para que el manejador de eventos quede en el DOM para poder escuchar los clicks.
    document.addEventListener('click', handleClickPorFuera);
    return () => {
      document.removeEventListener('click', handleClickPorFuera);
    };
  },[estadoSubLista]);

  return (
    <ul className="main-nav"
      ref={menuRef}
      style={{ background: datos.configColor.background,}}>
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
                        <span>--ʌ</span> 
                        // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        //   <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        // </svg>

                        :
                        <span>--v</span> 
                        // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        //   <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        // </svg>
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
                > <span onClick={(e) => handleMostrarSubMenu(e, item.id)} style={{width:"200px"}} > {item.name} </span>
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

