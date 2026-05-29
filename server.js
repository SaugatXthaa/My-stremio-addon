const { serveHTTP } = require("stremio-addon-sdk");
const addonInterface = require("./addon");

// Render/Railway provide the port through an environment variable
const port = process.env.PORT || 7000;

serveHTTP(addonInterface, { port: port });
console.log(`Addon is active on port ${port}`);
