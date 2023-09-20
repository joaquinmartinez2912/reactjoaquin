import { useState } from "react";
import "../main.css";

function ListaMenu(props) {
  const datos = props.lista

  // Defino una variable con un estado para controlar el submenu que contiene una lista con los datos a mostrar.
  const [mostrarSubLista, setMosrarSubLista] = useState([])
  const [left, setleft] = useState()
  const [top, settop] = useState()

  //Defino los manejadores de eventos para mostrar el submenu, no cargo datos con esto, solo abro el submenu
  const handleMostrarSubMenu = (SubMenuId,e) => {
    setMosrarSubLista((prev) => {
      let arr = [...prev];
      arr[SubMenuId] = true;
      setleft(e.target.offsetLeft + e.target.offsetWidth + "px")
      console.log(left)
      settop(e.target.offsetTop + "px")
      return arr
    }
    )
  }

  const handleOcultarSubMenu = (SubMenuId) => {
    setMosrarSubLista((prev) => {
      let arr = [...prev];
      arr[SubMenuId] = false;
      return arr
    }
    )
  }

  return (
    <ul>
      {datos.map((item) => {
        return (
          item.list ? // Desde aca empiezo a trabajar los hijos. Va a devolver un <li> con un evento asociado
            <li
              // Capturo el evento (Hacer click en un item determinado) y mando el id que corresponde para que se ejecute la funcion. El id lo uso para modificar el estado
              onMouseEnter={ (e) => handleMostrarSubMenu(item.id,e)} 
              onMouseLeave={ (e) => handleOcultarSubMenu(item.id)}
              key={item.id}>
              <span>{item.name + "-->"}</span>
              {/* Agrego la ul que se va a mostrar cuando se haga click */}
              <ul className={`sub-menu-ul ${mostrarSubLista[item.id] ? "open" : ""}`}
              style={{
                left:left,
                color: "green",
                top: top
              }}
              >
                <li> ads</li>
             </ul>
            </li>

            : <li key={item.id}>{item.name} </li>)  //Devuelve solo el nombre sino existe item.list
      })
      }
    </ul>
  )
}

export default ListaMenu

