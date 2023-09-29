import "../main.css";
import ItemMenu from "./Itemmenu";


function SubListaMenu3(props) {
    const datos = props.data
    const para = props.comp
    return (
        <ul className="ul-tercer-nivel">
            {datos.map((subItem3) => {
                return (
                    para === subItem3.idPadre &&
                    <ItemMenu llave={subItem3.name} > {subItem3.name} </ItemMenu>
                )
            }
            )}
        </ul>
    )
}

export default SubListaMenu3
