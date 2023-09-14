import { Component } from "react";

export default class Formulario extends Component {
   constructor(props) {
       super(props);
       this.state = {
        nombre : "",
        correo : ""
       }
   }

   handleSubmit=(e) =>{
    e.preventDefault(e)
//    const ipNombre = document.getElementById("ipnombre")
//    const ipCorreo = document.getElementById("ipcorreo")
    alert("Nombre: "+ this.state.nombre)
   }

   handlerOnChangeNombre = (e)=>{
    this.setState({
        ...this.state,
        nombre: e.target.value
    })
   }
   render() { 
    const {nombre, correo} = this.state
       return (
            <>
           
            <form onSubmit={this.handleSubmit} > 
                <p>
                    <label htmlFor="ipnombre" >nombre</label>
                     <input id="ipnombre"  value={nombre} onChange={this.handlerOnChangeNombre} />
                </p>
                <p>
                    <label htmlFor="ipcorreo">Correo:</label> 
                    <input id="ipcorreo" value={correo}/>
                </p>
                <p>
                    <button type="submit" >Suscribe</button>
                </p>
            </form>
           
           </>
       )
   }
} 
