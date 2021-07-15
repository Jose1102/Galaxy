
import './assets/css/App.css';

//Enrutamiento
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Importar componentes
import MiComponente from './assets/components/MiComponente';
import UserComponet from './assets/components/UserComponent';
import HeaderComponent from './assets/components/HeaderComponent';
import FooterComponent from './assets/components/FooterComponent';
import CreateUser from './assets/components/CreateUser';
import LoginUser from './assets/components/LoginUser';
import Inicio from './assets/components/Inicio';
import Jugar from './assets/components/Jugar';



function App() {
  return (

    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {UserComponet}></Route>
                          <Route path = "/usuarios" component = {UserComponet}></Route>
                          <Route path = "/agregarJugador" exact component = {CreateUser}></Route>
                          <Route path = "/iniciarSesion" exact component = {LoginUser}></Route>
                          <Route path = "/inicio" exact component = {Inicio}></Route>
                          <Route path = "/jugar" exact component = {Jugar}></Route>
                          
                          
                          
                    </Switch>
                </div>
              
        </Router>
    </div>

  );
}

export default App;
