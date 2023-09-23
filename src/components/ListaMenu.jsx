import { useState } from "react";
import "../main.css";

function ListaMenu(props) {
  const datos = props.lista
  

  // Defino una variable con un estado para controlar el submenu que contiene una lista con los datos a mostrar.
  const [estadoSubLista, setestadoSubLista] = useState(false)
  const [mostrarSubLista, setMosrarSubLista] = useState([])

  const [left, setleft] = useState(0)
  const [top, settop] = useState(0)
  const [veces, setVeces] = useState(0)

  //Defino los manejadores de eventos para mostrar el submenu, no cargo datos con esto, solo abro el submenu
  const handleMostrarSubMenu = (SubMenuId, e) => {
    console.log( e)
    e.preventDefault();

    const { offsetLeft, offsetTop, offsetWidth, clientHeight, clientLeft, clientTop, clientWidth } = e.target;
    setleft(`${clientLeft}px`);
    settop(`${clientHeight}px`);
    console.log(clientHeight)
    console.log(clientLeft)
    console.log(clientTop)
    console.log(clientWidth)

    setestadoSubLista(!estadoSubLista)
    console.log( estadoSubLista)

    setMosrarSubLista((prev) => {
      const arr = [...prev];
      arr[SubMenuId] = true; // Que esto sea verdadero o falso define como se va a completar el css de la <ul>
      //setVeces(veces+1)
      //alert(veces)
      console.log(arr)

      return arr;
    });
  };

  return (

      <ul className="main-nav">

        {datos.map((item) => {
          return (
            item.list ? // Desde aca empiezo a trabajar los hijos. Va a devolver un <li> con un evento asociado
              <li
                // Capturo el evento (Hacer click en un item determinado) y mando el id que corresponde para que se ejecute la funcion. El id lo uso para modificar el estado
                key={item.id}
                onClick={(e) => handleMostrarSubMenu(item.id, e)}
                >
                <div style={{position: "absolute"}}>
                  <span>{item.name +"(flecha)"}</span>
                </div>
                {/* Agrego la ul que se va a mostrar cuando se haga click */}
                <ul className={`sub-menu-ul ${mostrarSubLista[item.id] ? "open" : ""}`}
                  style={{
                    left: left,
                    top: top
                  }}
                >
                  {
                    item.list.map((elemento) => {
                      return (
                        <li key={elemento.id} style={{ backgroundColor: "green" }} > {elemento.name} </li>
                      )
                    })
                  }
                </ul>
              </li>

              : <li key={item.id}>{item.name} </li>)  //Devuelve solo el nombre sino existe item.list
        })
        }

      </ul>


  )
}

export default ListaMenu

