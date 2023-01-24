const { app, BrowserWindow, ipcMain } = require('electron')

app.on('ready', () => {
    console.log('Aplicacão iniciada');
    let mainWindow = new BrowserWindow({
        webPreferences: {
               nodeIntegration: true,
               contextIsolation: false,
               enableRemoteModule: true,
        },
        width: 600,
        height: 400
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

});

app.on('window-all-closed', () => {
    app.quit();
});

ipcMain.on('abrir-janela-sobre', () => {
   let sobreWindow = new BrowserWindow({
    width: 300,
    height: 200
   });
   
   sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);

});