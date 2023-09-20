import { useState } from "react";
//import { useEffect } from "react";
import "../main.css";

function ListaMenu(props) {
  const datos = props.lista

  // Defino una variable con un estado para controlar el submenu que contiene una lista con los datos a mostrar.
  const [mostrarSubLista, setMosrarSubLista] = useState([])
  const [left, setleft] = useState(0)
  const [top, settop] = useState(0)

// Con esto defino las variables una sola vez.
/*   useEffect(() => {
    // Calcular los valores iniciales de left y top una vez cuando se carga la página o cambia el contenido
    const elementoLi = document.getElementById("elementoLi"); // Reemplaza "elementoLi" con el ID del elemento <li> que desees usar como referencia
    if (elementoLi) {
      setleft(elementoLi.offsetLeft + elementoLi.offsetWidth + "px");
      settop(elementoLi.offsetTop + "px");
    }
  }, [datos]);
 */
  //Defino los manejadores de eventos para mostrar el submenu, no cargo datos con esto, solo abro el submenu
  const handleMostrarSubMenu = (SubMenuId,e) => {
    e.preventDefault(e)
    setMosrarSubLista((prev) => {
      let arr = [...prev];
      arr[SubMenuId] = true;
      console.log(top)
      setleft(e.target.offsetLeft + e.target.offsetWidth + "px") // El left te dice cuanto se debe mover y el Width cuanto debe medir.
      settop(e.target.offsetTop + "px") 
      return arr
    }
    )
  }

  const handleOcultarSubMenu = (SubMenuId,e) => {
    e.preventDefault(e) // iria??...no cambia nada...sera porque no hay un comportamiento predeterminado para este evento???
    setMosrarSubLista((prev) => {
      let arr = [...prev];
      arr[SubMenuId] = false;
      setleft(e.target.offsetLeft + e.target.offsetWidth + "px") // El left te dice cuanto se debe mover y el Width cuanto debe medir.
      settop(e.target.offsetTop + "px") 
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
              onMouseLeave={ (e) => handleOcultarSubMenu(item.id,e)}
              key={item.id}
              id="elementoLi"
              >
              <span>{item.name +" -->"}</span>
              {/* Agrego la ul que se va a mostrar cuando se haga click */}
              <ul className={`sub-menu-ul ${mostrarSubLista[item.id] ? "open" : ""}`}
              style={{
                left:left,
                top: top
              }}
              >
                <li>{left} {top}</li>
                <li>Hola</li>
                <li>Chau</li>
             </ul>
            </li>

            : <li key={item.id}>{item.name} </li>)  //Devuelve solo el nombre sino existe item.list
      })
      }
    </ul>
  )
}

export default ListaMenu

