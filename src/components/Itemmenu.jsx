import "../main.css";
import PropTypes from 'prop-types';


function ItemMenu(props) {
    ItemMenu.propTypes={
        llave : PropTypes.number.isRequired
    }
   
    const { key, style, onMouseEnter, onMouseLeave} = props;
    
    return (
        <li key={key}
            className="li-subMenu"
            style={
                style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            
        > {props.children} 
        </li>
    )
}

export default ItemMenu
