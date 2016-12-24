'use strict';

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.on('ready', () => {
  

  mainWindow = new BrowserWindow(
    {
      width: 900, 
      height: 800
    }
  );
  mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  //Devtron Plugn developers
  //require('devtron').install();

  mainWindow.on('closed', () => {
    mainWindow = null
  })

});


app.on('window-all-closed', () => {
  
  if (process.platform !== 'darwin')
    app.quit();

});

app.on('activate', () => {
  
  if (mainWindow === null) 
    createWindow()
  
});
