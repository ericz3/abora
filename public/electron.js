const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    // width: 575,
    // height: 850,
    width: 320,
    height: 354,
    // titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },

    fullscreenable: false,
    maximizable: false,
    resizable: false,
  })

  // and load the index.html of the app.
  win.loadURL(
      isDev ? 'http://localhost:3000' : 'file://${path.join(_dirname, "../build/index.html")}'
      )

  // Open the DevTools.
  win.webContents.openDevTools()

  win.removeMenu();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('login', (e) => {
  win.setSize(500, 730);
  win.center();
  win.setMaximizable(true);
  win.setFullScreenable(true);
  win.setResizable(true);
});

ipcMain.on('logout', (e) => {
  win.close();
  win.destroy();
  createWindow();
})
