'use strict'

//Accedemos a los recursos de filesystem de nodejs
var fs = require('fs');
//Lista de elementos a eliminar al llamar 
var target = process.argv[2];
console.log( 'PATH a eliminar: ' , target )
var slash = (process.plataform == 'win32')? '\\' : '/';

removeFiles( __dirname + slash + target );

function removeFiles (path) {

  if( fs.existsSync(path) ) {

    fs.readdirSync(path).forEach(function(file,index){

      var curPath = path + slash + file;

      if(fs.lstatSync( curPath ).isDirectory())
        removeFiles( curPath );
      else
        fs.unlinkSync( curPath );

    });

    fs.rmdirSync( path );
  }else{
  	console.log('Ruta no localizada.')
  }
};