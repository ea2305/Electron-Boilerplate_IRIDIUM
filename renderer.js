//Carga de datos para script de reactJS

(function(){

	//Carga de axios para consulta de servidor
	var axios = require( 'axios' );

	//Deteccion de puerto actual
	const port = process.env.PORT || 3000;

	//Obtenemos ruta
	var route = `http://localhost:${port}/dist/app.bundle.js`;
	//Creamos nodo de script
	var node = document.createElement( 'script' );


	//Carga de datos por webpack
	axios.get( route )
	  .then(function (res) {
	    console.log(' Conexion completa ');
	  })
	  .catch(function (error) {//Carga de datos locales
	    console.log("Carga de archivos precompilados");
	    route = `../dist/app.bundle.js`;
	  })
	  .then(function( e ){//Agregamos nodo de script
	    node.setAttribute( 'src' , route );
	    document.body.appendChild( node );
	  });

})(this)

//Tools
console.log(' Welcome to electron ! ');

