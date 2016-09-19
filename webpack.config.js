//Requiere el path dependiendo el SO
var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {

    //Modulos de entrada
    // Atributos son recorridos para cada elemento
    //Agregamos contexot de directorio para hacer referencia a todos los archivos
    context: path.join( __dirname , 'app' ),
    entry  : {
        app: './components/app.js',
    },

    //Salida de elementos por ruta definida y nombre del Atributo
    //ingresado [name] -> name_attr

    output : {
        //Referencia de salida : path: __dirname
        path : path.join(__dirname , 'dist'),
        publicPath: '/dist/',
        filename : '[name].bundle.js'//Remplaza cada nombre por el del archivo
    },

    //Configuraciones del servidor para desarrollo
    devServer: {
        //contentBase: path.join(__dirname , 'app'),
        inline : true,
        port : 3000,
    },
    //Presets para configuracion
    module : {
        loaders : [
            {
                test    : /\.jsx?$/,
                loader  : 'babel-loader',
                exclude : /node_modules/,
                query   : {
                    presets : [ 'es2015' , 'react' ]
                }
            },{
                test: /\.css$/,
                loader: 'css',
                include: path.join( __dirname , 'app' , 'css' )
            }
        ]
    }
}