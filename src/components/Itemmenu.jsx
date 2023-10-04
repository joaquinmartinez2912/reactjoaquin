import "../main.css";
import PropTypes from 'prop-types';


function ItemMenu(props) {
    ItemMenu.propTypes={
        llave : PropTypes.number.isRequired,
        clase : PropTypes.string.isRequired
    }
   
    const { key, clase, style, onMouseEnter, onMouseLeave,onClick} = props;
   
    return (
        <li key={key}
            className= {clase}
            style={
                style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        > {props.children} 
        </li>
    )
}

export default ItemMenu
