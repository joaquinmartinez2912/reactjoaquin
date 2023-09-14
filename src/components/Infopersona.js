import { Component } from 'react'; //para crear componentes
// Componente de clase
export default class InfoPersona extends Component {
    render(){
      return(
        <table>
          <tr>
            <th>nombre</th>
            <th> apellido</th>
          </tr>
          <td>
            {this.props.nombre}
          </td>
          <td>
            {this.props.apellido}
          </td>
        </table>
      )
    }
  }
