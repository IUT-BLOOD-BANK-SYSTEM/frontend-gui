const { app } = require("electron");
const path = require("path");

if (process.env.NODE_ENV === "development") {
  process.env.VITE_DEV_SERVER_URL = `http://localhost:5173`;
}

require("./src/main/main");
