const { app, BrowserWindow } = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    backgroundColor: '#ffff00'
  })

  mainWindow.loadFile('index.html')

  mainWindow.once('ready-to-show', mainWindow.show)

  const secWindow = new BrowserWindow({
    width: 600,
    height: 400,
    hiddenInset: true
   })

   secWindow.loadURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})