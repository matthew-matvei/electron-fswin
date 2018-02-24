"use strict";

module.exports = process.platform === "win32" ? require("./build/Release/electron-fswin.node") : null;
