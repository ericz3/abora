const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")
const { jwt: { AccessToken } } = require('twilio');

const VideoGrant = AccessToken.VideoGrant;

require('dotenv').load()

const MAX_ALLOWED_SESSION_DURATION = 14400;

let win, vidWindow;

//Create the main window
async function createWindow () {
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
      isDev ? 'http://localhost:3000' : 'file://${path.join(_dirname, "../public/index.html")}'
      )

  // Open the DevTools.
  win.webContents.openDevTools()

  win.removeMenu();
}



//Avoid duplicated app launch
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
      if (win.isMinimized()) win.restore()
      win.focus()
    }
  })

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.whenReady().then(createWindow)
}


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
});


//This IPC process is called to create a pop up window when the user joins a room
ipcMain.on('video', (e) => {
  vidWindow = new BrowserWindow({
      height:500,
      width: 500
  });
  // vidWindow.loadURL('file://' + __dirname + '/Video.html');
  vidWindow.loadFile('file://${path.join(__dirname, "../quickstart/public/index.html")}');
  vidWindow.webContents.openDevTools()
  vidWindow.removeMenu();
});

