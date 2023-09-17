import "../main.css";

function ListaMenu({lista}) {

  return (
        <ul> 
        { lista.map((item) => <li key={item.id}> {item.name} </li> ) } 
        </ul>  
  )
}

export default ListaMenu

