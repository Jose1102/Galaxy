import React from 'react';

class MiComponente extends React.Component{
    render(){

        let receta = {
            nombre:'Pizza',
            ingredientes:['tomate','peperoni','masa'],
            calorias:300
    
        };
        return(
            <div>
                <h1>Hola, soy mi componente</h1>
                <h1>{receta.nombre}</h1>
                <h1>{receta.calorias}</h1>

                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i)=>{
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>

                            );
                        })
                    }
                </ol>

            </div>

            

        );
    }




}

export default MiComponente;