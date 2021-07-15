import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            gamerTag: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeGamerTagHandler = this.changeGamerTagHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.cancel = this.cancel.bind(this);

    }



    changeNameHandler = (event) => {
        this.setState({ nombre: event.target.value })
    }

    changeGamerTagHandler = (event) => {
        this.setState({ gamerTag: event.target.value })
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { nombre: this.state.nombre, gamerTag: this.state.gamerTag };
        console.log('user => ' + JSON.stringify(user));

        UserService.addUser(user).then(res => {
            this.props.history.push('/inicio');
        });
    }

    cancel() {
        this.props.history.push('/usuarios');

    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Agregar Nuevo Jugador</h3>
                            
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nombre: </label>

                                        <input placeholder="Nombre" name="nombre" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        

                                    </div>

                                    

                                    <div className="form-group">
                                        <label> GamerTag: </label>

                                        <input placeholder="gamerTag" name="gamerTag" className="form-control" 
                                                value={this.state.gamerTag} onChange={this.changeGamerTagHandler}/>
                                        

                                    </div>

                                    <br></br>

                                    <button className="btn btn-success" onClick={this.saveUser}>Guardar</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancelar</button>

                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateUser;