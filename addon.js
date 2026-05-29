const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "community.legal.template",
    version: "1.0.0",
    name: "Stremio Template",
    resources: ["stream"],
    types: ["movie"],
    idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
    // Return empty or sample streams for testing
    return Promise.resolve({ streams: [] });
});

module.exports = builder.getInterface();
