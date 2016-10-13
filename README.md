# Iridium Boilerplate para ( WebPack , ReactJS , ElectronJS )

Serie de configuraciones para implementación de Webpack con la transformación de ECMA6 a 5 y preset de ReactJS
* Servidor de aplicación corriendo en el puerto 3000, configurable en webpack.config.js
* Presets [ 'es2015' , 'react' ]

## intalación de paquetes con npm
```
npm install
````

* En caso de problemas con instalación , ejecuta el comando con sudo o como administrador en Windows 
* En caso de error de instalación de "node-gyp rebuild", ejecutar el siguiente comando

```
sudo npm install --unsafe-perm --verbose -g sails
```

## Ejecutar Electron 
```
npm run scene
```

## Creación de Bundle webpack con detección de cambios:
```
npm run webpack
```
Escucha los cambios para una construcción continua del bundle


* MIT
* Elihu A. Cruz Albores
