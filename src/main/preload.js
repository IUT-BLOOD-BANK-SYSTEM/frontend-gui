const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendTCPMessage: (message) => {
    try {
      ipcRenderer.send("send-tcp-message", JSON.stringify(message));
    } catch (error) {
      console.error("Failed to send message:", error.message);
    }
  },

  onTCPMessage: (callback) => {
    ipcRenderer.on("tcp-data", (_event, data) => {
      try {
        callback(data); // Receive already parsed JSON from main.js
      } catch (error) {
        console.error(
          "Error processing data in preload.js:",
          error.message,
          "Data:",
          data
        );
      }
    });
  },
});
