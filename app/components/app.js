import React, {Component} from 'react';
import {render} from 'react-dom'; 

class Hello extends Component{

    constructor( props ){
        super( props );
        this.state = {};
    } 

    render(){
        return(
            <h1>Nuevo cargador webpack </h1>
        );
    }

}

render(

    <Hello />,
    document.getElementById( 'root' )

);