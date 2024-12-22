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
  socketClient.connect(8080, "192.168.16.110", () => {
    console.log("Connected to C socket server via TCP");
  });

  // socketClient.connect(8080, "0.tcp.in.ngrok.io", () => {
  //   console.log("Connected to C socket server via TCP");
  // });


  let buffer = "";

  socketClient.on("data", (data) => {
    buffer += data.toString();

    const completeMessages = [];
    let boundaryIndex;

    while ((boundaryIndex = buffer.indexOf("\n")) !== -1) {
      const completeMessage = buffer.slice(0, boundaryIndex);
      buffer = buffer.slice(boundaryIndex + 1);
      completeMessages.push(completeMessage.trim());
    }

    completeMessages.forEach((message) => {
      if (message.trim() === "") {
        return;
      }

      try {
        const parsedData = JSON.parse(message);

        BrowserWindow.getAllWindows().forEach((window) => {
          window.webContents.send("tcp-data", parsedData);
        });
      } catch (error) {
        console.error(
          "JSON parse error outside loop:",
          error.message,
          "Data:",
          message
        );
      }
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
