const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendTCPMessage: (message) =>
    ipcRenderer.send("send-tcp-message", JSON.stringify(message)),
  onTCPMessage: (callback) =>
    ipcRenderer.on("tcp-data", (_event, data) => {
      console.log("Raw TCP data:", data);
      try {
        const jsonData = JSON.parse(data.trim());
        callback(jsonData);
      } catch (error) {
        console.error("JSON parse error:", error.message, "Data:", data);
      }
    }),
});
