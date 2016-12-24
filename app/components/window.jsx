/*
	Clase principal para carga de elementos
 */

import React,{Component} from 'react';

export class Window extends Component {
  
  constructor (props) {
    
    super(props);

    //Elementos iniciales
    this.state = {
    	title : this.props.title
    }
  }
  
  render() {
    return (

      <div id="" className="">

      	<h1>
      		{this.props.title}
      	</h1>
      	
      	<p>We are using Node: {process.versions.node}</p>
      	<p>and electron: {process.versions.electron}</p>
      	<p>Chromium version {process.versions.chrome}</p>

      </div>
    );
  }
}