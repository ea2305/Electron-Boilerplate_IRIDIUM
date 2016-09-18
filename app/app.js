import axios from 'axios';
import a from './test.js';

axios.get('http://gladys-api.com/prueba/modules/models/DAO_getArea.php')
    .then( function ( res ){
        console.log( res );
    })
    .catch( function( err ){
        console.log( err );
    }) 