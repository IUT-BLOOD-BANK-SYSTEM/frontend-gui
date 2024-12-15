const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendTCPMessage: (message) => ipcRenderer.send("send-tcp-message", message),
  onTCPMessage: (callback) =>
    ipcRenderer.on("tcp-data", (_event, data) => callback(data)),
});
