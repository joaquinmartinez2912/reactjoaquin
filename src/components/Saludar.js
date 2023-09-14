import './Saludar.css'

function Saludar(props){
    const {nombre, apellido="valor por defecto"} = props
    return <p className='p-saludar'> Bienvenido <b>{nombre} {apellido}</b></p>
  }
export default Saludar

