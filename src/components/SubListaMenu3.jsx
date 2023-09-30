import "../main.css";
import ItemMenu from "./Itemmenu";


function SubListaMenu3(props) {
    const datos = props.data
    const SubMenu2 = props.subMenu2
    return (
        <ul key="" className="ul-tercer-nivel">
            {datos.map((subItem3) => {
                return (
                    SubMenu2 === subItem3.idPadre &&
                    <ItemMenu llave={subItem3.id} > {subItem3.name} </ItemMenu>
                )
            }
            )}
        </ul>
    )
}

export default SubListaMenu3
