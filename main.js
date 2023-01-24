const { app, BrowserWindow } = require('electron')

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
})