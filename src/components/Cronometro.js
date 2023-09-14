import { Component } from "react";

export default class Cronometro extends Component {
    constructor(props){
      super(props)
      this.state = {contador:props.inicio}
      setInterval(() => {
        this.setState({contador: this.state.contador+1})
      }, 1*1000);
  
    }
    render(){
      return (
        <div style={{
          color: "#048"
        }}   >
          Segundos: {this.state.contador}
          <button onClick={()=>(
            this.setState({contador:this.props.inicio})
          )
          }> Reset </button>
          
        </div>
      )
    }
  }

  Cronometro.defaultProps = {
    inicio : 50
    }
