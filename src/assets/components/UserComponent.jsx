import React from 'react';
import UserService from '../services/UserService';
import '../css/App.css';
import { Route, withRouter } from 'react-router-dom';


class UserComponet extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.AddUsers = this.AddUsers.bind(this);

        this.LoginUser = this.LoginUser.bind(this);


    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    AddUsers() {
        this.props.history.push('/agregarJugador');
    }

    LoginUser(){
        this.props.history.push('/iniciarSesion');
    }



    render() {
        return (
            
            <div className="usuarios">
                <h2 className="lista">Lista de usuarios</h2>

                <div>
                    <button className="btn btn-primary" onClick={this.AddUsers} > Agregar Jugador</button>

                    <button className="btn btn-success" onClick={this.LoginUser} style={{ marginLeft: "10px" }}> Iniciar Sesión</button>

                

                </div>
                <br></br>
                <div className="row">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <td className="text-center">Nombre de usuario</td>
                                <td className="text-center">Gamer Tag</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.idUsuario}>

                                            <td>{user.nombre}</td>
                                            <td>{user.gamerTag}</td>

                                        </tr>
                                )


                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }

}

export default withRouter(UserComponet);