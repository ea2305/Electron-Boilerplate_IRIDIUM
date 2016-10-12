import React, {Component} from 'react';
import {render} from 'react-dom'; 

class Hello extends Component{

    constructor( props ){
        super( props );
        this.state = {};
    } 

    render(){
        return(
            <label>Nuevo cargador webpack | <span className="candle"> CandleLabs Tecnologies ©</span> </label>
        );
    }

}

render(

    <Hello />,
    document.getElementById( 'root' )

);