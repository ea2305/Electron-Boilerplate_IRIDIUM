'use strict'
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', () => {
  
  createWindow();

});


app.on('window-all-closed', () => {
  
  if (process.platform !== 'darwin')
    app.quit();

});

app.on('activate', () => {
  
  if (mainWindow === null) 
    createWindow();
  
});

let createWindow = () => {
  
  mainWindow = new BrowserWindow(
    {
      width: 900, 
      height: 800
    }
  );

  mainWindow.loadURL( `file://${__dirname}/index.html` );

  // Verificamos el tipo el modo produccion o desarrollo, para visualizacion de 
  //herramientas para desarrollo.
  if(process.env.NODE_ENV == 'development')
    mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null
  });

}