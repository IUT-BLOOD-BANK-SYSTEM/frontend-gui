const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendMessage: (message) => ipcRenderer.send("message", message),
  onMessage: (callback) => ipcRenderer.on("message", callback),
});
