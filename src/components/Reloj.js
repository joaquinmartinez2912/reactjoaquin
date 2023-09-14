import { Component } from "react";

export default class Clock extends Component {
    constructor(props){
      super(props)
      this.state = {
        hora:this.getHora()
      }
      // Esto no deberia estar aca, porque es un evento que se sigue ejecutando. Deberia desuscribirme.
      setInterval(()=>{
        this.setState({
          hora: this.getHora()
        })
      },1*1000)
    }
  
    normaliza(numero){
      const resultado = numero < 10 ? "0" + numero : numero 
      return resultado
    }
  
    getHora() {
      let salida=""
      let ahora = new Date()
      salida += this.normaliza(ahora.getHours())
      salida += ":"
      salida += this.normaliza(ahora.getMinutes())
      salida += ":"
      salida += this.normaliza(ahora.getSeconds())
      return salida
    }
  
     render() { 
         return (
             <div>
              <h1> Hora: {this.state.hora} </h1>
             </div>
         )
     }
  }