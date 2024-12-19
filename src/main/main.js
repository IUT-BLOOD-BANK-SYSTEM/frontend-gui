const { app, BrowserWindow, ipcMain } = require("electron");
const net = require("net");
const path = require("path");

let socketClient;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const devServerURL = process.env.VITE_DEV_SERVER_URL;

  if (devServerURL) {
    mainWindow.loadURL(devServerURL);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../dist/renderer/index.html"));
  }
}

app.on("ready", () => {
  createWindow();

  socketClient = new net.Socket();

  socketClient.connect(8080, "192.168.16.81", () => {
    console.log("Connected to C socket server via TCP");
  });

  socketClient.on("data", (data) => {
    console.log("Received from server:", data.toString());

    BrowserWindow.getAllWindows().forEach((window) => {
      window.webContents.send("tcp-data", data.toString());
    });
  });

  socketClient.on("close", () => {
    console.log("Connection to server closed");
  });

  socketClient.on("error", (err) => {
    console.error("TCP Error:", err.message);
  });

  ipcMain.on("send-tcp-message", (event, message) => {
    console.log("Message from renderer:", message);

    if (socketClient && socketClient.writable) {
      socketClient.write(message + "\n");
    } else {
      console.error("Socket not connected or writable");
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
