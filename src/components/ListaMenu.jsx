import { useState } from "react";
import "../main.css";

function ListaMenu(props) {
  const datos = props.lista

  // Defino una variable con un estado para controlar el submenu que contiene una lista con los datos a mostrar.
  const [mostrarSubLista, setMosrarSubLista] = useState([])
  const [left, setleft] = useState(0)
  const [top, settop] = useState(0)
  // const [veces, setVeces] = useState(0)

  //Defino los manejadores de eventos para mostrar el submenu, no cargo datos con esto, solo abro el submenu
  const handleMostrarSubMenu = (SubMenuId, e) => {
    e.preventDefault();

    const { offsetLeft, offsetTop, offsetWidth } = e.target;
    setleft(`${offsetLeft + offsetWidth}px`);
    settop(`${offsetTop}px`);

    setMosrarSubLista((prev) => {
      const arr = [...prev];
      arr[SubMenuId] = true; // Que esto sea verdadero o falso define como se va a completar el css de la <ul>
      // setVeces(veces+1)
      // alert(veces)
      return arr;
    });
  };

  const handleOcultarSubMenu = (SubMenuId, e) => {
    e.preventDefault();

    setMosrarSubLista((prev) => {
      const arr = [...prev];
      arr[SubMenuId] = false; // Que esto sea verdadero o falso define como se va a completar el css de la <ul>
      return arr;
    });
  };

  return (
    <div>

      <ul>

        {datos.map((item) => {
          return (
            item.list ? // Desde aca empiezo a trabajar los hijos. Va a devolver un <li> con un evento asociado
              <li
                // Capturo el evento (Hacer click en un item determinado) y mando el id que corresponde para que se ejecute la funcion. El id lo uso para modificar el estado
                key={item.id}
                onMouseEnter={(e) => handleMostrarSubMenu(item.id, e)}
                onMouseLeave={(e) => handleOcultarSubMenu(item.id, e)}
              >
                <div>
                  <span>{item.name + " -->"}</span>
                </div>
                {/* Agrego la ul que se va a mostrar cuando se haga click */}
                <ul className={`sub-menu-ul ${mostrarSubLista[item.id] ? "open" : ""}`}
                  // style={{
                  //   left: left,
                  //   top: top
                  // }}
                >
                  {
                    item.list.map((elemento) => {
                      return (
                        <li style={{ backgroundColor: "green" }} > {elemento.name} </li>
                      )
                    })
                  }
                </ul>
              </li>

              : <li key={item.id}>{item.name} </li>)  //Devuelve solo el nombre sino existe item.list
        })
        }

      </ul>

    </div>
  )
}

export default ListaMenu

