const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "community.multisource.addon",
    version: "1.0.0",
    name: "Multi-Source 4K Addon",
    description: "Streams from Multi-Sources with 4K support",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"],
    catalogs: [] // FIXED: This was causing your error
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler((args) => {
    // This is where you would normally run your scraper logic.
    // The 'url' below should be replaced with the link you extract from the sites.
    const streams = [
        {
            name: "Multi-Source",
            title: "4K Ultra HD\nMulti-Subtitles",
            url: "https://example.com/direct_video_link.m3u8", // Direct video link goes here
            behaviorHints: {
                notWebReady: false,
            },
            // How to add integrated subtitles
            subtitles: [
                {
                    id: "eng",
                    url: "https://example.com/english_subs.vtt",
                    lang: "English"
                }
            ]
        }
    ];

    return Promise.resolve({ streams: streams });
});

module.exports = builder.getInterface();
