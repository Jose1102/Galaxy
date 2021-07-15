import React, { Component } from 'react';

import '../css/App.css';

class Inicio extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.jugar = this.jugar.bind(this);
        this.volver = this.volver.bind(this);

    }

    jugar() {
        this.props.history.push('/jugar');

    }

    volver() {

        this.props.history.push('/usuarios');

    }
    render() {
        return (
            
            <div className="principal">

    
                <form>

                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <div className="text-center">
                        <button className="btn btn-success btn-lg btn-block" onClick={this.jugar}>Jugar</button>

                    </div>



                    
                    <br></br>

                    <div className="text-center">

                        <button className="btn btn-danger btn-lg btn-block" onClick={this.volver}>Volver</button>

                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    
                    



                </form>



            </div>
        );
    }
}

export default Inicio;