import './App.css';
import Saludar from './components/Saludar';
import InfoPersona from './components/Infopersona';
import Cronometro from './components/Cronometro';
import Toast from './components/Toast';
import Clock from './components/Reloj';
import usuarios from './data/usuarios.json';
import { Component } from 'react';
import ClickContext from './components/ClickContext';
import Formulario from './components/Formularios';

//function MostrarNumero(props){
//  return(
//    <p style={{
//      fontSize:80
//    }} > {props.numero} </p>
//  )
//}


class CardUSuario extends Component {
  render() {
    const { name, clave } = this.props.data
    return (<div>
      <p>{name}</p>
      <p>{clave}</p>
    </div>)
  }
}

class ListarUsuario extends Component {
  render() {

    return (
      <article>
        {
          usuarios.map((usuario) => {
            return (<CardUSuario key={usuario.id} data={usuario} />)
          })
        }
      </article>
    )
  }
}


function App() {
  return (
    <div>
      <h1> Mi primer proyecto</h1>
      <Saludar nombre="Maria" apellido="Rodriguez" />
      <Saludar nombre="Maria" />
      <InfoPersona nombre="Juan" apellido="Gonzalez" />
      <Cronometro inicio={60} />
      <Toast />
      <Clock />
      <ClickContext />
      <Formulario />
      <ListarUsuario usuarios = {usuarios} />


    </div>
  );
}

export default App;