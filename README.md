# Iridium Boilerplate para ElectronJS

Serie de configuraciones para implementación de electronjs con electron-compiler\n
Empaquetado para diversos sistemas operativos.

## Requisitos
* NodeJS LTS >= 6
* Python 2.7 (Sitemas macOs y Linux)

En windows se recomienda el uso de Chocolatey para la instalación de paquetes en windows como nodejs lts
* Instalacion de nodejs con chocolatey
```
choco install nodejs-lts
```

## intalación de paquetes con npm
```
npm install
````

## Configuración especial para Node gyp
En caso errores en la instalación, verificar los requisitos de node gyp
en la página oficial
https://github.com/nodejs/node-gyp

```
sudo npm install --unsafe-perm --verbose -g sails
```

## Ejecutar Electron 
```
npm start
```

## Empaquetado para Windows y macOs
Para macOs la ejecucion del comando es suficiente para la creación de la aplicación
```
npm run packager:mac
```

En el caso de windows, necesitaremos todos los requisitos anteriores ya mencionados.
* nodeJS LTS - (El boilerplate fue configurado con la dependencia de chocolatey nodejs lts 6.9)
* En caso de ocurrir un error el la ejecucion del proceso de limpieza (cleaner.js) verificar los procesos en ejecucion de la aplicaión previamente ejecutados.

```
npm run packager:win
```


* MIT
* CandleLabs Technologies Tool
* author: Elihu A. Cruz Albores
