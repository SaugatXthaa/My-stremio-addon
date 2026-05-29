const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./addon"); // Assuming your logic is in addon.js
serveHTTP(addonInterface, { port: process.env.PORT || 7000 });
