import "./main.css";
import Menu from './components/Menu';
import DrawClass from "./components/DrawClass";

function App() {

  const configMenu = {
    configColor: {
      background:'#f4f5fa', // Color de Fondo General de la botonera
      itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
      itemColor: '#666', // Color del texto de cada item del menú
      itemActive:'#a8a8a8', // Color cuando hace click y se abre un  submenú '#a8a8a8',
    },
    idFirstNivel: 150,
    menuItems: [
      { name: 'Another Action Nivel1', isFolder: false, id: 148, idPadre: 150 },
      { name: 'sub menu Nivel1', isFolder: true, id: 2, idPadre: 150 },
      { name: 'otro sub menu 1', isFolder: true, id: 22, idPadre: 150 },
      { name: 'otro Nivel2', isFolder: false, id: 44, idPadre: 22 },
      { name: 'Action Nivel2', isFolder: false, id: 3, idPadre: 2 },
      { name: 'Another action Nivel2', isFolder: false, id: 4, idPadre: 2 },
      { name: 'sub menu Nivel2', isFolder: true, id: 5, idPadre: 2 },
      { name: 'otro sub 2', isFolder: true, id: 99, idPadre: 2 },
      { name: 'otro Nivel3', isFolder: false, id: 98, idPadre: 99 },
      { name: 'Another action Nivel3', isFolder: false, id: 55, idPadre: 5 },
      { name: 'something else here Nivel3', isFolder: false, id: 56, idPadre: 5 },
    ],
  }

  const CLASS_UML = {
    name: 'Person',
    attributes: ['+name:str','+phoneNumber:str','+emailAddress:str'],
    methods:['+purcharseParkinPass()'],
    borderColor:'#DC2DDE',
    headColor:'#DC2DDE',
    textColor:'#333333'
  }
  
  const CLASS_UML2 = {
    name: 'Address',
    attributes: ['+street:str','+city:str','+state:str','+postalCode:int','+country:str'],
    methods:['+validate():bool','+outputAsLabel():str'],
    borderColor:'#00AAE4',
    headColor:'#00AAE4',
    textColor:'#333333'
  }

  return (
      <main className="container">
        <div>
          <Menu data={configMenu} />
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        <div className="container2">
            <DrawClass data={CLASS_UML}/> 
        
            <DrawClass data={CLASS_UML2}/>
        </div>
      </main>
  );
}


export default App;

