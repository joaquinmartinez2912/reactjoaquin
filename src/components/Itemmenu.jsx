import "../main.css";

function ItemMenu(props) {
    const key = props.llave
    return (
        <li key={key} className="li-subMenu"> {props.children} </li>
    )
}

export default ItemMenu
