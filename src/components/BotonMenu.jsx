import React, { useState } from 'react'


function BotonMenu(props) {
    const {valor, id} = props
    const [botonDesplegado, setBotonDesplegado] = useState([])

    const desplegar = () => {
        setBotonDesplegado(!botonDesplegado)
        console.log(valor)
        console.log(id)
    }

    const botonDesplegadoHandler = (subMenuId) => {
        setBotonDesplegado((prev) => {
          let arr = [...prev];
          //arr[subMenuId] = true;
          return arr;
        });
      };

    return (
       
        <button className='botonDeMenu' onClick={desplegar}> {valor}  </button>
        
    )
}


export default BotonMenu
